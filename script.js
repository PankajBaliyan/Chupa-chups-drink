let IndexValue = 1;
let value;
function calculate(n) {
    IndexValue += n;
    if(IndexValue <= 0) {
        IndexValue = 1;
    }
    value = document.getElementById('TotalNumber');
    value.innerHTML = IndexValue;
}
