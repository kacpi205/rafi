<?php

use Illuminate\Support\Facades\Route;

Route::get('/welcome', function () {
    return view('welcome');
});

Route::get('/dash', function () {
    return view('dashboard');
});

Route::get('/prod', function () {
    return view('products');
});
