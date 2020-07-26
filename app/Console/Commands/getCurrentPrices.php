<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use \Carbon\Carbon as Carbon;
use App\Price as Price;
class getCurrentPrices extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'get_price';

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
        $this->binRequest = new \BinanceRequest();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $sumbols =  config('settings.sumbols');
        $now = Carbon::now();

        $prices = [];
        $response = $this->binRequest->get('ticker/price');
        foreach ($response as $price) {
            if(in_array($price->symbol,$sumbols) !== false ) {
                $newPriceElem = (array)$price;
                $newPriceElem['created_at'] = $now;
                $newPriceElem['updated_at'] = $now;
                $prices[] = $newPriceElem;
            }
        }
        //dd($prices);
        Price::insert($prices);

    }
}
