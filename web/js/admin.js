$(".inline_edit").change(function () {
    $.ajax({
        url: "ajax/edit",
        method: "PUT",
        data: {
            id: $(this).attr("data-inline-entity"),
            param: $(this).attr("data-inline-param"),
            value: $(this).val()
        }
    })
});

if ($("body#easyadmin-list-MonitoredAirportQuick .table").length) {
    $("body#easyadmin-list-MonitoredAirportQuick .table").floatThead();
}
