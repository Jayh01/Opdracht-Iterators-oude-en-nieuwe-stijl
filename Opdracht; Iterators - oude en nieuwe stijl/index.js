let colors =['yellow', 'blue', 'red', 'orange', 'paars'];
let som = 0;
    while (som < colors.length) {
        //console.log('kleuren: ' + colors[som])
        som++
}


let kleur =['yellow', 'blue', 'red', 'orange', 'paars'];
for (let colors2 = 0; colors2 < kleur.length; colors2++){
        console.log ( 'kleuren: ' + kleur[colors2]);
}

colors.forEach (kleur2 => console.log (kleur2));
kleur.forEach (test => console.log(test))

//while loops neemt 6 regels in beslag
// for loops neemt 4 regels in beslag
// forEach neemt 1 regel in beslag
// ik vind de for metod beter leesbaar, want dan zie in alle stappen dat verricht is
//

 let opject = {
    naam: 'jaap',
    achterNaam: 'kees'
};
opject.forEach (uitslag => (console.log(uitslag)));

