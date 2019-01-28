<?php

namespace App\Http\Requests;

use App\Http\Requests\UserFormRequest;
use \Illuminate\Validation\ValidationException;
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

        return $rules;
    }


    protected function failedValidation($validator)
    {
        $errors = $validator->errors();
        $response = new JsonResponse([
            'name' => $errors->get('name'),
            'email' => $errors->get('email'),
        ]);

        throw new ValidationException($validator, $response);
    }

}
