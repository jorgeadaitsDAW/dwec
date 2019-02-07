<?php

namespace App\Http\Requests;

use App\Http\Requests\UserFormRequest;
use Illuminate\Validation\ValidationException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\JsonResponse;

class UserAjaxFormRequest extends UserFormRequest
{

    public function rules()
    {
    
        $rules = array();

        if($this->exists('name')){
            $rules['name'] = $this->validarNombre();
        }

        if($this->exists('email')) {
            $rules['email'] = $this->validarEmail();
        }
        
        if($this->exists('password')) {
            $rules['password'] = $this->validarPass();
        }

        if($this->exists('password_confirmation')) {
            $rules['password_confirmation'] = $this->validarPassConfirm();
        }

        return $rules;
    }

    protected function validarPass(){
        return array(
            'required',
            'min:5',
            'regex:/^[0-9]+$/'
        );
    }

    protected function validarPassConfirm(){
        return 'required_with:password|same:password';
    }

    protected function failedValidation(Validator $validator)
    {
        $errores = $validator->errors();
        $atributos = $this->attributes();
        $listaErroresPorCampo = [];

        
        foreach($atributos as $atributo => $texto){
            if($this->exists($atributo)){
                $listaErroresPorCampo[$atributo] = $errores->get($atributo);
            }
        }
        $response = new JsonResponse($listaErroresPorCampo);

        throw new ValidationException($validator, $response);
    }

}
