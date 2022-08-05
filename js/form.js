var elForm, elSeclectPackage, elPackageHint, elTerms, elTermHint;
elForm = document.getElementById('formSignup');
elSeclectPackage = document.getElementById('package');
elPackageHint = document.getElementById('packageHint');
elTerms = document.getElementById('terms');
elTermHint = document.getElementById('termsHint');

function packageHint(){
    var pack = this.options[this.selectedIndex].value;
    if (pack === 'monthly'){
        elPackageHint.innerHTML = 'Save $10 if you pay for 1 year!';
    }else {
        elPackageHint.innerHTML = 'Wise choice!';
    }
}
function checkTerms(event){
    if (!elTerms.checked){
        elTermHint.innerHTML = 'You must agree to the terms.';
    }
}
elForm.addEventListener('submit', checkTerms, false);
elSeclectPackage.addEventListener('change', packageHint, false);