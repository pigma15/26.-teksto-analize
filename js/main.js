
function inputText () {
    let tekstas = document.querySelector('textarea').value;
    let simboliai = 0;
    let pastraipos = 0;
    let sakiniai = 0;
    let zodziai = 0;
    let tikriniai = 0;
    let raides = 0;
    let skaiciai = 0;
    let skaitmenys = 0;

    let subTekstai = tekstas.split(/[\s\-\:\(\)\!\?]+/);

    for (let i = 0; i < subTekstai.length; i++) {
        let iskarpa = subTekstai[i];
        //SKAICIU KIEKIS
        if (/[\d]+[\.\d]*/.test(iskarpa)) {
            skaiciai += 1;
        }
        //ZODZIU KIEKIS
        if (/[a-zA-Z]+/.test(iskarpa)) {
            zodziai += 1;
        }
        //GALIMAI TIKRINIAI ZODZIAI
        if(/[a-zA-Z]/.test(iskarpa[0])) {
            if (iskarpa[0] === iskarpa[0].toUpperCase()) {
                tikriniai += 1;
                console.log(`${iskarpa} galimai tikrinis`);
            } else {
                console.log(`${iskarpa} is mazosios raides`);
            }
        }
    }

    //PASTRAIPU KIEKIS A
    if (tekstas[0] !== undefined) {
        pastraipos = 1;
    }

    for (let i = 0; i < tekstas.length; i++) {
        //TEKSTINIU SIMBOLIU KIEKIS
        if (tekstas[i] !== ' ' && tekstas[i] !== '\n' && tekstas[i] !== '\t') {
            simboliai += 1;
        }
        //PASTRAIPU KIEKIS
        if (tekstas[i] === '\n' && tekstas[i + 1] !== '\n') {
            pastraipos += 1;
        }
        //SAKINIU KIEKIS B
        if (tekstas [i] === '.' || tekstas [i] === '!' || tekstas [i] === '?' ) {
            if (tekstas[i + 1] === ' ' || tekstas[i + 1] === undefined || tekstas[i + 1] === '\n' ) {
                sakiniai += 1;
            }
        }
        //RAIDZIU KIEKIS
        if (/[a-zA-Z]/.test(tekstas[i])) {
            raides += 1;
        }
        //SKAITMENU KIEKIS
        if (/[0-9]/.test(tekstas[i])) {
            skaitmenys += 1;
        }
    }

    //PASTRAIPU KIEKIS C
    if (tekstas[tekstas.length - 1] === '\n') {
        pastraipos -= 1;
    }


    document.querySelector('.simboliai').innerText = `${simboliai}`;
    document.querySelector('.pastraipos').innerText = `${pastraipos}`;
    document.querySelector('.sakiniai').innerText = `${sakiniai}`;
    document.querySelector('.zodziai').innerText = `${zodziai}`;
    document.querySelector('.skaiciai').innerText = `${skaiciai}`;
    document.querySelector('.skaitmenys').innerText = `${skaitmenys}`;
    document.querySelector('.tikriniai').innerText = `${tikriniai}`;
    document.querySelector('.raides').innerText = `${raides}`;

}

function resetas() {
    document.querySelector('.simboliai').innerText = `0`;
    document.querySelector('.pastraipos').innerText = `0`;
    document.querySelector('.sakiniai').innerText = `0`;
    document.querySelector('.zodziai').innerText = `0`;
    document.querySelector('.skaiciai').innerText = `0`;
    document.querySelector('.skaitmenys').innerText = `0`;
    document.querySelector('.tikriniai').innerText = `0`;
    document.querySelector('.raides').innerText = `0`;
}