<?php

return [
    'app_mail' => env('APP_MAIL', 'autosend@CryptoView.ua'),
    'my_mail' => 'blyakher85@gmail.com',

    'uah_rate' => '27',

    'api_urls' => [
        'bitfinex' => [
            'v1' => 'https://api.bitfinex.com/v1/',
            'v2' => 'https://api.bitfinex.com/v2/',
        ],
        'coinmarketcap' => [
            'listings' => 'https://api.coinmarketcap.com/v2/listings/'
        ],
        'binance' => 'https://www.binance.com/api/',
    ],

    'telegramm' => [
        'token' => "bot564769519:AAHbM2gIySq1W6B8YeBJFo-Krcn2ZxUhNYk",
        'chat_id' => '571667999'
    ],

    'socket' => [
        'ip' => '192.168.0.38:1200',
    ],

    'arduino' => [
        'port' => '/dev/ttyUSB0',
    ],


    'arbitrage_rules' => [
        'btcusd' => [
            'cuna' => ['>' => '33', '<' => '33'],
        ],
        'ethusd' => [
            'cuna' => ['>' => '33', '<' => '33'],
            // 'btc_trade' => [ '>'=>'10', '<' => '8' ]
        ],
        'bchusd' => [
            'cuna' => ['>' => '43', '<' => '43']
        ],
        'ltcusd' => [
            'cuna' => ['>' => '33', '<' => '33']
        ],




        'dashusd' => [
            'cuna' => ['>' => '5', '<' => '7'],
            //'btc_trade' => [ '<' => '20' ]
        ],


        'xmrusd' => [
            'cuna' => ['>' => '5', '<' => '10']

        ],
        'zecusd' => [
            'cuna' => ['>' => '5', '<' => '7']

        ],

    ],

    'static_rules' => [
        'ethusd' => [
            'binance' => ['>' => '175', '<' => '150'],
        ],
        'xrpusd' => [
            'binance' => ['>' => '0.35', '<' => '0.01'],
        ],
        'btcusd' => [
            'binance' => ['>' => '11000', '<' => '1000'],
        ],
        'ltcusd' => [
            'binance' => ['>' => '130', '<' => '10']
        ],
    ]


];
