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
       return view('terminal.index', []);
    }

    public function getBookOrder() {
        $orders = OrderBook::get()->toArray();
        return response()->json($orders);
    }
}
