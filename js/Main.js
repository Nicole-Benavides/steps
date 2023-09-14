const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');
const num4 = document.getElementById('num4');
const step1 = document.getElementById('section1');
const step2 = document.getElementById('section2');
const step3 = document.getElementById('section3');
const step4 = document.getElementById('section4');
const linea = document.querySelector('ul');

// ATRAS
function stepOne(){
    num2.classList.remove('active');
    step1.classList.add('active');
    step2.classList.remove('active');
    linea.classList.remove('num2');

}

// ADELANTE
function stepTwo(){
    num2.classList.add('active');
    step1.classList.remove('active');
    step2.classList.add('active');
    linea.classList.add('num2');
}

// ATRAS
function stepTwoBack(){
    num2.classList.remove('active');
    num3.classList.remove('active');
    step1.classList.remove('active');
    step2.classList.add('active');
    step3.classList.remove('active');
    linea.classList.remove('num3');
}


// ADELANTE
function stepThree(){
    num3.classList.add('active');
    step1.classList.remove('active');
    step2.classList.remove('active');
    step3.classList.add('active');
    linea.classList.add('num3');
}

// ADELANTE
function stepFour(){
    num4.classList.add('active');
    step1.classList.remove('active');
    step2.classList.remove('active');
    step3.classList.remove('active');
    step4.classList.add('active');
    linea.classList.add('num4');
}

// ATRAS
function stepThreeBack(){
    num2.classList.add('active');
    num3.classList.add('active');
    num4.classList.remove('active');
    step1.classList.remove('active');
    step2.classList.remove('active');
    step3.classList.add('active');
    step4.classList.remove('active');
}



