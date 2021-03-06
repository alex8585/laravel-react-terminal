<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\OrderBook as OrderBook;
use App\Statistic as Statistic;
use App\Price as Price;

use \Carbon\Carbon as Carbon;
use Illuminate\Support\Facades\Hash;


class TerminalController extends Controller
{
    public function __construct()
    {
        //$this->middleware('auth');
    }

    public function index()
    {
       return view('terminal.index', []);
    }

    public function getBookOrder(Request $request) {
        $sumbol = $request->sumbol ? $request->sumbol : 'ETHUSDT';
        $orders = OrderBook::where(['symbol'=>$sumbol])->get()->toArray();
        return response()->json($orders);
    }

    public function getStatistics(Request $request) {
        $sumbol = $request->sumbol ? $request->sumbol : 'ETHUSDT';
        $statistic = Statistic::where(['symbol'=>$sumbol])->first()->toArray();
        $data = json_decode($statistic['data']);
        
        $price = Price::latest('updated_at')->where(["symbol" => $sumbol])->first();
        
        $data->lastPrice =  $price->price;
        return response()->json($data);
    }

    public function getSymbols(Request $request) {
        //subquery
        $data = Price::join('statistics', 'prices.symbol', '=', 'statistics.symbol')->where(
            ['prices.updated_at' => function ($query) {
                $query->from('prices')->select('updated_at')->latest('updated_at')->first();
        }])->select(['statistics.id as stat_id', 'prices.*','statistics.data',])->get();

        return response()->json($data);
    }

    public function getChartData(Request $request) {
        $sumbol = $request->sumbol ? $request->sumbol : 'ETHUSDT';//480
        $data = Price::where(['symbol'=>$sumbol])->latest('updated_at')->limit(480)
            ->orderBy('updated_at')->get()->reverse()->toArray();
       
        $newCandels = [];
        $candles = array_chunk($data, 5);
        //dd( $candles );
        foreach($candles as $candle) {
            $newCandl =[];
            $start = array_reduce($candle, function($carry, $elem) {
                if(!isset( $carry['created_at']) ) {
                    return $elem;
                }
                if(strtotime($elem['created_at']) > strtotime($carry['created_at'])) {
                    return $carry;
                } 
                return $elem;
            });

            $end = array_reduce($candle, function($carry, $elem) {
                if(!isset( $carry['created_at']) ) {
                    return $elem;
                }
                if(strtotime($elem['created_at']) > strtotime($carry['created_at'])) {
                    return $elem;
                } 
                return $carry;
            });

            $timestamp = strtotime($start['created_at']);
            $time = date('H:i', $timestamp);
            $newCandl[] = $time;
            
            $newCandl[] = max(array_column($candle, 'price'));
            $newCandl[] = $start['price'];
            $newCandl[] = $end['price'];
            $newCandl[] = min(array_column($candle, 'price'));
            
            $newCandels[] = $newCandl;
        }

        //dd(  $newCandels);
        return response()->json($newCandels);
    }

    private function max($candle, $item)
    {
        
        return $candle;
    }


}
