/**
 * Created by Jorge on 29/11/2017.
 */
$(document).ready(function() {
        $("#boton1").on(
            {
                "click": function () {
                    $("#ejemplo").hide(1000,
                        function () {
                            alert("div DESAPARECIO");
                        });
                }
            }
        );

        $("#boton2").on(
            {
                "click": function () {
                    $("#ejemplo").show(1000,
                        function () {
                            alert("div APARECIO");
                        });
                }
            }
        );
    }
);
