<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderBook extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order_books', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('currency');
            $table->string('exchanger');
            $table->string('type');
            $table->float('price', 16, 8)->unsigned();
            $table->float('qty', 16, 8)->unsigned();
            $table->timestamps();
        });

        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('order_books');
    }
}
