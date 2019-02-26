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
        return 'required|string|email|max:20|unique:users';
    }

    protected function mensajesEmail(){
        $mensajes = array();
        $mensajes['email.email'] = 'Introduzca un email valido';
        $mensajes['email.required'] = 'Es obligatorio introducir el email';
        return $mensajes;
    }

    protected function validarPass(){
        return 'nullable|required_with:password_confirmation|string|confirmed';
    }

    protected function mensajesPass(){
        $mensajes = array();
        $mensajes['password.nullable'] = 'Introduzca un password';
        $mensajes['password.required_with'] = 'Debe coincidir ambos passwords';
        $mensajes['password.string'] = 'Formato incorrecto';
        $mensajes['password.confirmed'] = 'Debe coincidir ambos passwords';
        return $mensajes;
    }



}