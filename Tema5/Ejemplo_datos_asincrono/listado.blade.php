
    @forelse($chusqers as $chusqer)
            <div class="small-12 column">
                @include('chusqers.chusqer')
            </div>
    @empty
        <div class="row">
            <p>No hay mensajes para mostrar</p>
        </div>
    @endforelse

    <div class="text-center">
        {{ $chusqers->links() }}
    </div>

    @push('scripts')
        <script src="{{ asset('js/datos.js') }}" defer></script>
    @endpush

