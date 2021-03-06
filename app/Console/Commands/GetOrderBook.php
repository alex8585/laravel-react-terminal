<?php

namespace App\Console\Commands;


use Illuminate\Console\Command;
use App\OrderBook as OrderBook;
use \Carbon\Carbon as Carbon;
use BinanceRequest;

class GetOrderBook extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'get_order_book';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
        $this->binRequest = new BinanceRequest();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle() 
    { 
        
        $sumbols =  config('settings.sumbols');

        foreach( $sumbols as $sumbol) {

            $params = [
                'symbol'=> $sumbol,
                'limit' => 5
            ];

            $response = $this->binRequest->get('depth', $params);

           // dd($response); die;

            OrderBook::where([
                'exchanger' => 'binance',
                'symbol' => $sumbol,
            ])->delete();
    
    
            $now = Carbon::now();
    
            $insertArrData = [];
    
            foreach($response->bids as $bid) {
                $newElem = [];
                //$newElem['currency'] = $sumbol;
                $newElem['symbol'] = $sumbol;
                $newElem['exchanger'] = 'binance';
                $newElem['type'] = 'bid';
                $newElem['price'] = $bid[0];
                $newElem['qty'] = $bid[1];
                $newElem['created_at'] = $now;
                $newElem['updated_at'] = $now; 
                $insertArrData[] = $newElem;
            }
    
            foreach($response->asks as $ask) {
                $newElem = [];
                //$newElem['currency'] = $sumbol;
                $newElem['symbol'] = $sumbol;
                $newElem['exchanger'] = 'binance';
                $newElem['type'] = 'ask';
                $newElem['price'] = $ask[0];
                $newElem['qty'] = $ask[1];
                $newElem['created_at'] = $now;
                $newElem['updated_at'] = $now; 
                $insertArrData[] = $newElem;
            }
    
    
    
            OrderBook::insert($insertArrData);
            sleep(1);
        }
        

        
        

       




       

        //print_r($insertArrData);
    }
}
