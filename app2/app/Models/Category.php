<?php

namespace App\Models;

use App\Models\Product;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    // use HasUuids;

    protected $table = 'categories';

    public function products()
    {
        return $this->belongsToMany(Product::class);
    }

    function setActiveCategory($category, $output = 'active')
{
    return request()->category == $category ? $output : '';
}


}
