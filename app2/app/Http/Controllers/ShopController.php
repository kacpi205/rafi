<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;

class ShopController extends Controller
{
        public function index()
        {
            $pagination = 9;
            $categories = Category::all();

            if (request()->category) {
                $products = Product::with('categories')->whereHas('categories', function ($query) {
                    $query->where('slug', request()->category);
                });
                $categoryName = optional($categories->where('slug', request()->category)->first())->name;
            } else {
                $products = Product::where('featured', true);
                $categoryName = 'Featured';
            }

            if (request()->sort == 'low_high') {
                $products = $products->orderBy('price')->paginate($pagination);
            } elseif (request()->sort == 'high_low') {
                $products = $products->orderBy('price', 'desc')->paginate($pagination);
            } else {
                $products = $products->paginate($pagination);
            }

            return view('products')->with([
                'products' => $products,
                'categories' => $categories,
                'categoryName' => $categoryName,
            ]);
        }

        // public function show($slug)
        // {
        //     $product = Product::where('slug', $slug)->firstOrFail();

        //     return view('products')->with([
        //         'product' => $product,
        //         'stockLevel' => $stockLevel,
        //         'mightAlsoLike' => $mightAlsoLike,
        //     ]);
        // }

        public function search(Request $request)
        {
            $request->validate([
                'query' => 'required|min:3',
            ]);

            $query = $request->input('query');

            $products = Product::search($query)->paginate(10);

            // return view('search-results')->with('products', $products);
            //TODO
        }

}
