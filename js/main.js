

function inputText () {
    let tekstas = document.querySelector('textarea').value;
    let simboliai = 0; //tekstiniai simboliai neskaitant tarpu !
    let pastraipos = 0; //pastraipu kiekis !
    let sakiniai = 0; //sakiniu kiekis !
    let zodziai = 0;
    let tikriniai = 0;
    let raides = 0;
    let skaiciai = 0;

    console.log('VISO SIMBOLIU:', tekstas.length);
    console.log('ATSKIRI ZODZIAI', tekstas.split(' ') ) ;

    let x = tekstas.split(' ');

    for (let i = 0; i < x.length; i++) {
        let u = parseFloat(x[i]);
        console.log(u);
        console.log(Number.isNaN(u));
        if (Number.isNaN(u)) {
            zodziai += 1;
        }
    } 

    if (tekstas[0] !== undefined) {
        pastraipos = 1;
    }


    for (let i = 0; i < tekstas.length; i++) {
        //TEKSTINIU SIMBOLIU KIEKIS
        if (tekstas[i] !== ' ' && tekstas[i] !== '\n') {
            simboliai += 1;
        }
        //PASTRAIPU KIEKIS
        if (tekstas[i] === '\n' && tekstas[i + 1] !== '\n') {
            pastraipos += 1;
        }
        //SAKINIU KIEKIS
        if (tekstas [i] === '.' || tekstas [i] === '!' || tekstas [i] === '?' ) {
            if (tekstas[i + 1] === ' ' || tekstas[i + 1] === undefined || tekstas[i + 1] === '\n' ) {
                sakiniai += 1;
            }
        }
    }

    if (tekstas[tekstas.length - 1] === '\n') {
        pastraipos -= 1;
    }


    document.querySelector('.simboliai').innerText = `${simboliai}`;
    document.querySelector('.pastraipos').innerText = `${pastraipos}`;
    document.querySelector('.sakiniai').innerText = `${sakiniai}`;
    document.querySelector('.zodziai').innerText = `${zodziai}`;
}