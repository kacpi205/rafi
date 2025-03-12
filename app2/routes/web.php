<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/welcome', function () {
    return Inertia::render('welcome');
})->name('welcome');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('/', function () {
    return view('welcome');
});

Route::post('count', function (Request $request) {
    return response()->json([
        'message' => $request->message,
    ]);
});

Route::get('/products', function (){
    return Inertia::render('products');
})->name('products');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
