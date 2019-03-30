$(function() {
    $("#lembrete").click(function() {
        if ($(this).is(":checked")) {
            $("#camposAdicionais").show();
            // $("#AddPassport").hide();
        } else {
            $("#camposAdicionais").hide();
            // $("#AddPassport").show();
        }
    });
});