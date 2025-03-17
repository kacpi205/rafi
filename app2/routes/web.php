<?php

use Inertia\Inertia;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NewPageController;
use App\Http\Controllers\ProductsController;


// Route::get('/welcome', function () {
//     return Inertia::render('welcome');
// })->name('welcome');


// Route::get('dashboard', function () {
//     return Inertia::render('dashboard');
// })->name('dashboard');


Route::get('/products', [ProductsController::class, 'index'])->name('products');



Route::get('/newtestpage', [NewPageController::class, 'index'])->name('newtestpage');


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
