<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');



// ProductController

Route::get("product",[ProductController::class,'index']);
Route::delete("product/{id}",[ProductController::class,'destroy']);
Route::put("product/{id}",[ProductController::class,'update']);
Route::post("product",[ProductController::class,'store']);
Route::get("product/{id}",[ProductController::class,'show']);


// CategoryController

Route::get("category",[CategoryController::class,'index']);
Route::get("category/{id}",[CategoryController::class,'show']);
Route::post("category",[CategoryController::class,'store']);
Route::put("category/{id}",[CategoryController::class,'update']);
Route::delete("category/{id}",[CategoryController::class,'destroy']);