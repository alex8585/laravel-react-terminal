<?php 

class BinanceRequest {
    public function __construct() {
        
    }

    public function get($endpoint,$params=[]) {
        $apiUrl = config('settings.api_urls.binance');
        $baseUrl = "{$apiUrl}v3/{$endpoint}";


        $qs = http_build_query($params); 
        $url = "{$baseUrl}?{$qs}";
        

        $client = new \GuzzleHttp\Client(['http_errors' => false]);
        $res = $client->request('GET', $url);
        $response =  json_decode($res->getBody());
        return $response ;
    }
}