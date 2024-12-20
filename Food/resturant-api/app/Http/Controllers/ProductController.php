<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;


class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return[
            "this is index"
        ];  
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return[
            "this is store"
        ];
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return[
            "this is show"
        ];
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        return[
            "this is update"
        ];
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return[
            "this is destroy or delete"
        ];
    }
}
