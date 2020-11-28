/* 
Turime teksta (gali buti keli paragrafai).
Jame yra sakiniu.

Isspausdinti lentele:
- kiek yra paragrafu
- kiek yra sakiniu
- kiek yra zodziu
- kiek yra tekstiniu simboliu (isskaitant tarpus)
- kiek yra raidziu
- kiek yra skaiciu
- kiek yra tikriniu zodziu (ivardziai (vardas, pavarde) ir vietovardziai)
 */

function inputText () {
    let tekstas = document.querySelector('textarea').value;
    let simboliai = 0;
    let paragrafai = 0;
    let sakiniai = 0;
    let zodziai = 0;
    let tikriniai = 0;
    let raides = 0;
    let skaiciai = 0;
    
    for (let i = 0; i < tekstas.length; i++) {
        if (tekstas[i] !== ' ' && tekstas[i] !== '\n') {
            simboliai += 1
        }
    }
    document.querySelector('.simboliai').innerText = `${simboliai}`;
}