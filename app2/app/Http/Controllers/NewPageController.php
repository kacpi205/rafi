<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class NewPageController extends Controller
{

    public function index(): Response
    {
        // $data = [
        //     'notification' => 'newtestpage'
        // ];

        // // Debugging
        // dd($data); // Stops execution and dumps the response

        // return Inertia::render('newtestpage', $data);


        return Inertia::render('newtestpage', [
          'notification' => 'newtestpage'
        ]);
    }



}
