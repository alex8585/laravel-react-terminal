<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Statistic as Statistic;
use \Carbon\Carbon as Carbon;
use BinanceRequest;

class GetStatistics extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'get_statistics';

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
        $response = $this->binRequest->get('ticker/24hr');
        $sumbols =  config('settings.sumbols');


        foreach($response as $stat) {
            if(in_array($stat->symbol,$sumbols) !== false ) {
                $statObj = Statistic::updateOrCreate(
                    ['symbol' => $stat->symbol],
                    [
                        'symbol' => $stat->symbol,
                        'data' =>  json_encode($stat),
                    ]
                );
            }
            
        }
    }
}
