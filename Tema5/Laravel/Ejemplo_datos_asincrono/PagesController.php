<?php

namespace App\Http\Controllers;

use App\Chusqer;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\View;

class PagesController extends Controller
{
    /**
     * Genera la página de inicio del proyecto.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function home(){
        $chusqers = Chusqer::orderBy('created_at', 'desc')->paginate(10);

        return view('home', [
            'chusqers' => $chusqers
        ]);
    }

    /**
     * Página de saludo.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function saludo(){
        $saludo = "Bienvenidos a ADA-ITS";
        $usuario = "Fran";

        return view('saludo', [
            'saludo' => $saludo,
            'usuario'=> $usuario
        ]);
    }

    public function damePaginaChusqers(){
        if (request()->ajax()){
            $chusqers = Chusqer::orderBy('created_at', 'desc')->paginate(10);
            return View::make('listado', array('chusqers' => $chusqers))->render();
        }else{
            return redirect('/');
        }
    }

    public function damePaginaChusqersJSON(){
        $chusqers = Chusqer::orderBy('created_at', 'desc')->paginate(10);
        return response()->json([
            View::make('listado', array('chusqers' => $chusqers))->render()
        ]);
    }

    public function damePaginaChusqersJSON2(){

        $chusqers = Chusqer::orderBy('created_at', 'desc')->paginate(10);
        return $chusqers;
    }
}
