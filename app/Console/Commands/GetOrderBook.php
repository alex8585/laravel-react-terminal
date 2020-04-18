<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\OrderBook as OrderBook;
use \Carbon\Carbon as Carbon;

class GetOrderBook extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'order_book';

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
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    { 
        $apiUrl = config('settings.api_urls.binance');
        $baseUrl = $apiUrl . 'v3/depth';

        $params = [
            'symbol'=> 'ETHUSDT',
            'limit' => 5
        ];

        $qs = http_build_query($params); 
        $url = "{$baseUrl}?{$qs}";
        

        $client = new \GuzzleHttp\Client(['http_errors' => false]);
        $res = $client->request('GET', $url);
        $response =  json_decode($res->getBody());
       

        //print_r($response);

        
        OrderBook::where([
            'exchanger' => 'binance',
            'currency' => 'ETH',
        ])->delete();


        $now = Carbon::now();

        $insertArrData = [];

        foreach($response->bids as $bid) {
            $newElem = [];
            $newElem['currency'] = 'ETH';
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
            $newElem['currency'] = 'ETH';
            $newElem['exchanger'] = 'binance';
            $newElem['type'] = 'ask';
            $newElem['price'] = $ask[0];
            $newElem['qty'] = $ask[1];
            $newElem['created_at'] = $now;
            $newElem['updated_at'] = $now; 
            $insertArrData[] = $newElem;
        }



        OrderBook::insert($insertArrData);

        //print_r($insertArrData);
    }
}
