function addRow() {
    $("tbody").append(` 
        <tr>
            <td class="width-50">
                <button class="btn btn-outline-primary del-btn">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </td>
            <td class="width-300">
                <input type="text" class="form-control text-capitalize product-name">
            </td>
            <td class="width-150">
                <input type="number" class="form-control text-right cost" value="0" min="0">
            </td>
            <td class="width-150">
                <input type="number" class="form-control text-right quantity"  value="0" min=0">
            </td>
            <td class="text-right">
                <h4 class="mb-0 price">0</h4>
            </td>
        </tr>
    `);
}
addRow();

function total() {
    $("#total").html($(".price").toArray().map(p => p.innerHTML).reduce((x, y) => Number(x) + Number(y)));
}

//Add Row
$(".add-row-btn").click(function () {
    addRow();
})

//Remove Row
$("tbody").delegate(".del-btn", "click", function () {

    //console.log($("tbody tr").toArray().length);
    if ($("tbody tr").toArray().length === 1) {
        addRow();
    }
    // $(this).parent().parent().remove();
    $(this).parentsUntil("tbody").remove();
    total();
});

//Calculate Price
$("tbody").delegate("input", "keyup change", function () {
    //console.log("U Play");
    let cost = $(this).parentsUntil("tbody").find(".cost").val();
    let quantity = $(this).parentsUntil("tbody").find(".quantity").val();
    //console.log(cost, quantity);
    $(this).parentsUntil("tbody").find(".price").html(cost * quantity);
    total();
})
