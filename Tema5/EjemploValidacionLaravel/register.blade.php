@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Register') }}</div>

                <div class="card-body">
                    <!-- Cambiar la ruta para aprovecha el UserFormRequest -->
                    <form id="formulario" method="POST" novalidate action="register/nuevo">
                        @csrf

                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('Name') }}</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" name="name" value="{{ old('name') }}" required autofocus>

                                <div class="invalid-feedback">
                                @if ($errors->has('name'))
                                    @foreach($errors->get('name') as $error)
                                    <span role="alert">
                                        <strong>{{ $error }}</strong>
                                    </span>
                                    @endforeach
                                @endif
                                </div>
                            </div>
                            <!-- Componente de bootstrap para los spinners -->
                            <div class="spinner-border invisible" role="status">
                                <span class="sr-only"></span>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required>

                                <div class="invalid-feedback">
                                @if ($errors->has('email'))
                                    @foreach($errors->get('email') as $error)
                                    <span  role="alert">
                                        <strong>{{ $error }}</strong>
                                    </span>
                                    @endforeach
                                @endif
                                </div>

                            </div>
                            <div class="spinner-border invisible" role="status">
                                <span class="sr-only"></span>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>

                               <div class="invalid-feedback">
                                @if ($errors->has('password'))
                                    @foreach($errors->get('password') as $error)
                                    <span role="alert">
                                        <strong>{{ $error }}</strong>
                                    </span>
                                    @endforeach
                                @endif
                                </div>

                            </div>
                            <div class="spinner-border invisible" role="status">
                                <span class="sr-only"></span>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password_confirmation" class="col-md-4 col-form-label text-md-right">{{ __('Confirm Password') }}</label>

                            <div class="col-md-6">
                                <input id="password_confirmation" type="password" class="form-control" name="password_confirmation" required>
                            
                                <div class="invalid-feedback">
                                </div>
                            </div>
                            <div class="spinner-border invisible" role="status">
                                <span class="sr-only"></span>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Register') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
@push('scripts')
    <script src="{{ asset('js/validaciones/validacionRegistro.js') }}"></script>
@endpush