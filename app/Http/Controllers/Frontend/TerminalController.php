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

    public function getBookOrder() {
        $orders = OrderBook::get()->toArray();
        return response()->json($orders);
    }

    public function getStatistics(Request $request) {
        $sumbol = $request->sumbol ? $request->sumbol : 'ETHUSDT';
        $statistic = Statistic::where(['symbol'=>$sumbol])->first()->toArray();
        $data = json_decode($statistic['data']);
        
        $price = Price::latest('updated_at')->where(["symbol" => $sumbol])->first();
        //dd($data);
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

}
