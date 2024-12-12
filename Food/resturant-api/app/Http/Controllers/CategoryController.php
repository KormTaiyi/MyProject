<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return[
            "this is index in Category"
        ];
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return[
            "this is store in Category"
        ];
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return[
            "this is show in Category"
        ];
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        return[
            "this is update in Category"
        ];
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return[
            "this is destroy in Category"
        ];
    }
}
