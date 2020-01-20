<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'PagesController@home');
Route::get('/saludo', 'PagesController@saludo');

Route::get('/chusqers/create', 'ChusqersController@create');
    Route::get('/chusqers/{chusqer}', 'ChusqersController@show');
Route::post('/chusqers/create', 'ChusqersController@store');

Route::post('/register/validar', 'Auth\RegisterController@validacionAjax');
Route::post('/register/crear', 'Auth\RegisterController@create');




Route::get('/dameChusqers/', 'PagesController@damePaginaChusqers');
Route::get('/dameChusqersJSON/', 'PagesController@damePaginaChusqersJSON');
Route::get('/dameChusqersJSON2/', 'PagesController@damePaginaChusqersJSON2');



Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
