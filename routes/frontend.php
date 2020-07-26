<?php

/*
|--------------------------------------------------------------------------
| frontend Routes
|--------------------------------------------------------------------------
|
| Here is where you can register frontend routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "frontend" middleware group. Now create something great!
|
*/

use Illuminate\Http\Request;



Route::namespace('Frontend')->group(function () {
    
    Route::get('/', 'TerminalController@index');
    Route::get('/getbook', 'TerminalController@getBookOrder');
    Route::get('/getstatistics', 'TerminalController@getStatistics');
    Route::get('/getsymbols', 'TerminalController@getSymbols');


   /* Route::get('/currencies', 'CurrencyController@currencies')->name('front_currencies');

    Route::get('/currencies/{currency}', 'CurrencyController@show')->name('front_currency_show');

    Route::get('/tickers', 'TickerController@tickers')->name('front_tickers');
    
    Route::get('/exchangers', 'ExchangerController@exchangers')->name('front_exchangers');
    Route::get('/exchangers/{exchanger}', 'ExchangerController@show')->name('front_exchanger_show');
    
    Route::post('/contactus', 'ContactUsController@sendform')->name('contactus');
    

    Route::get('/news', 'NewsController@index')->name('front_news');
    Route::get('/news/{slug}', 'NewsController@show')->name('front_news_show');

    Route::get('/notifications', 'NotificationsController@index')->name('notifications');
    

    Route::get('/static/globallogic', 'StaticController@globallogic')->name('globallogic');
    Route::get('/static/ping', 'StaticController@ping')->name('ping');


    Route::get('/products', 'ProductsController@index')->name('products');*/
});







