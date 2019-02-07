<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

   /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {

        $rules = array();

        $rules['name'] = $this->validarNombre();
        $rules['email'] = $this->validarEmail();
        $rules['password'] = $this->validarPass();

        return $rules;
    }


    public function messages()
    {
        $mensajesNombre = $this->mensajesNombre();
        $mensajesEmail = $this->mensajesEmail();
        $mensajesPassword = $this->mensajesPass();
        $mensajesPasswordConfirm = $this->mensajesPassConfirm();
        $mensajes = array_merge(
            $mensajesNombre,
            $mensajesEmail,
            $mensajesPassword
        );
        return $mensajes;
    }

    protected function validarNombre(){
        return 'required|string|max:10';
    }

    protected function mensajesNombre(){
        $mensajes = array();
        $mensajes["name.required"] = 'Introduzca el nombre';
        $mensajes["name.string"] = 'Introduzca una cadena';
        $mensajes["name.max"] = 'Supera el máximo';
        return $mensajes;
    }

    protected function validarEmail(){
        return 'required|string|email|max:30|unique:users';
    }

    protected function mensajesEmail(){
        $mensajes = array();
        $mensajes['email.email'] = 'Introduzca un email valido';
        $mensajes['email.required'] = 'Es obligatorio introducir el email';
        return $mensajes;
    }

    protected function validarPass(){
        return array(
            'required',
            'min:5',
            'regex:/^[0-9]+$/',
            'required_with:password_confirmation',
            'same:password_confirmation'
        );
    }

    protected function mensajesPass(){
        $mensajes = array();
        $mensajes['password.required'] = 'Introduzca un password';
        $mensajes['password.min'] = 'Minimo 5 caracteres';
        $mensajes['password.same'] = 'Los passwords no coinciden';
        return $mensajes;
    }
    
    protected function mensajesPassConfirm(){
        $mensajes = array();
        $mensajes['password_confirmation.required_with'] = 'No son iguales los passwords';
        $mensajes['password_confirmation.same'] = 'No son iguales los passwords';
        return $mensajes;
    }

    public function attributes()
    {
        return [
            'name'     => 'nombre del usuario',
            'email' => 'email del usuario',
            'password'    => 'password del usuario',
            'password_confirmation'    => 'La confirmacion del password del usuario'
        ];
    }


}