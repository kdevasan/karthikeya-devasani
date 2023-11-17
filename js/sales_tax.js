var $ = function (id) {
    return document.getElementById(id);
};

window.onload = function () {
    $('subtotal').focus();
    $('calculate').onclick = EntriesPro;
    $('clear').onclick = FieldsCl;
    $('subtotal').onclick = dataCl;
    $('tax_rate').onclick = dataCl;
};

function EntriesPro() {
    var subtotal = parseFloat($('subtotal').value);
    var taxRate = parseFloat($('tax_rate').value);
    if (isNaN(subtotal) || subtotal <= 0 || subtotal >= 10000) {
        alert('Subtotal must be > 0 and < 10,000');
        return;
    }
    if (isNaN(taxRate) || taxRate <= 0 || taxRate >= 12) {
        alert('Tax Rate must be > 0 and < 12');
        return;
    }
    var salesTax = (subtotal * taxRate) / 100;
    var total = subtotal + salesTax;
    $('sales_tax').value = salesTax.toFixed(2);
    $('total').value = total.toFixed(2);
}

function  FieldsCl() {

    $('subtotal').value = '';
    $('tax_rate').value = '';
    $('sales_tax').value = '';
    $('total').value = '';
    $('subtotal').focus();
}

function dataCl() {
    this.value = '';
}
