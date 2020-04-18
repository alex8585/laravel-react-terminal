<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\OrderBook as OrderBook;
use \Carbon\Carbon as Carbon;



class TerminalController extends Controller
{
    public function __construct()
    {
        //$this->middleware('auth');
    }

    public function index()
    {
        $orders = OrderBook::get()->toArray();
       // dd($orders);
       return view('terminal.index', ['orders' => $orders]);
    }
}
