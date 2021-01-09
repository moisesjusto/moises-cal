const m = document.getElementById('moises');
m.addEventListener('click',()=>{
    const a = 60;
    const e = 75;
    const i = 100;

    const A1 = parseFloat(document.getElementById('A1').value); 
    const A2 = parseFloat(document.getElementById('A2').value);
    const AA =  A1*2 - A2*2;
    document.getElementById('A3').value= AA;
    const AAA = AA * a;
    document.getElementById('A4').value= AAA;
    
    const B1 = parseFloat(document.getElementById('B1').value); 
    const B2 = parseFloat(document.getElementById('B2').value);
    const BB =  B1*2 - B2*2;
    document.getElementById('B3').value= BB;
    const BBB = BB * e;
    document.getElementById('B4').value= BBB;

    const C1 = parseFloat(document.getElementById('C1').value); 
    const C2 = parseFloat(document.getElementById('C2').value);
    const CC =  C1*2 - C2*2;
    document.getElementById('C3').value= CC;
    const CCC = CC * i;
    document.getElementById('C4').value= CCC;

    const D1 = parseFloat(document.getElementById('D1').value);
    const D2 = parseFloat(document.getElementById('D2').value);
    const D3 = parseFloat(document.getElementById('D3').value);
    const D4 = parseFloat(document.getElementById('D4').value);
    const D5 = parseFloat(document.getElementById('D5').value);

    const D = D1 + D2 + D3 + D4 + D5;
    const ABC = AAA + BBB + CCC;

    const sumi1 = document.getElementById('E1').value = ABC;
    const sumi2 = document.getElementById('E2').value = D;

    const sumi3 = sumi2 - sumi1;

    document.getElementById('E3').value= sumi3;

    const por = sumi1 / 10;

    alert(`tu porciento es: ${por}`);
    
    
});

const pn = document.getElementById('moises1');
pn.addEventListener('click', ()=>{
    print();
})
