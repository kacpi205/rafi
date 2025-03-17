<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Product;
use Inertia\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class ProductsController extends Controller

{

    public function index() {

        return Inertia::render('products',
            ['categories' => Category::all(),
             'products' => Product::all()
            ]);
    }


    public function create(Request $request): Response{

        $request->validate([
            'title' =>'required|string|max:255',
            'price' =>'required|numeric|min:0',
            'discount' => 'numeric|min:0',
            'description' =>'required|string|max:255',
            'image' =>'required|image|mimes:jpeg,png,jpg|max:2048',

        ]);

        $product->create(
            $request->validated()
        );

        return Redirect::back()->with('success', 'product created.');

    }

    public function update(Product $product, Request $request): Response
    {
        $product->update(
            $request->validated()
        );

        return Redirect::back()->with('success', 'product updated.');
    }

    public function destroy(Product $product): Response
    {
        $product->delete();

        return Redirect::back()->with('success', 'product deleted.');
    }

    public function restore(Product $product): Response
    {
        $product->restore();

        return Redirect::back()->with('success', 'product restored.');
    }


}
