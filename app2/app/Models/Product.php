<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{


    protected $fillable = ['quantity'];

    protected $searchable = [
        'columns' => [
            'products.title' => 5,
            'products.price' => 4,
            'products.description' => 3,
            'products.image' => 2,
            'products.discount' => 2,

        ],
    ];

    public function categories()
    {
        return $this->belongsToMany('App\Category');
    }

    public function presentPrice()
    {
        return money_format('$%i', $this->price / 100);
    }


    public function toSearchableArray()
    {
        $array = $this->toArray();

        $extraFields = [
            'categories' => $this->categories->pluck('name')->toArray(),
        ];

        return array_merge($array, $extraFields);
    }
}
