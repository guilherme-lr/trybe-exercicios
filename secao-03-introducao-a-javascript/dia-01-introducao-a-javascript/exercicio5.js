const angulo1 = 50
const angulo2 = 75
const angulo3 = 55
if (angulo1 + angulo2 + angulo3 === 180) {
    console.log(true);
} else if (angulo1 + angulo2 + angulo3 !== 180 && angulo1 + angulo2 + angulo3 > 0){
    console.log(false);
} else if(angulo1 + angulo2 + angulo3 < 0){
    console.log('erro');
};
