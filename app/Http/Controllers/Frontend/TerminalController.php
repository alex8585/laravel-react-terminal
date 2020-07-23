<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\OrderBook as OrderBook;
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
       // $hashed = Hash::make('Elvne3132');
       // print_r($hashed);

        

       return view('terminal.index', []);
    }

    public function getBookOrder() {
        $orders = OrderBook::get()->toArray();
        return response()->json($orders);
    }
}
