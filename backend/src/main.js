const express = require('express');
const app = express();
const port = 8080;

const characterStats = {
    TzarinaKatarina: {
        healPoint: 3888,
        armor: 15,
        leadership: 80,
        speed: 46,
        meleeAttack: 50,
        meleeDefence: 45,
        weaponStrength: 400,
        chargeBonus: 20
    },
    Kostaltyn: {
        healPoint: 5072,
        armor: 20,
        leadership: 80,
        speed: 34,
        meleeAttack: 60,
        meleeDefence: 40,
        weaponStrength: 380,
        chargeBonus: 30
    },
    Kugath: {
        healPoint: 14840,
        armor: 70,
        leadership: 85,
        speed: 28,
        meleeAttack: 50,
        meleeDefence: 55,
        weaponStrength: 550,
        chargeBonus: 12
    },
    Nkari: {
        healPoint: 8048,
        armor: 5,
        leadership: 85,
        speed: 100,
        meleeAttack: 70,
        meleeDefence: 60,
        weaponStrength: 520,
        chargeBonus: 40
    }
}

const test = (character1, character2) => {
    let character1Stats;
    let character2Stats;
    let obj = [];

    if (character1 === "TzarinaKatarina") {
        character1Stats = characterStats.TzarinaKatarina
    } else if (character1 === "Kostaltyn") {
        character1Stats = characterStats.Kostaltyn
    } else if (character1 === "Kugath") {
        character1Stats = characterStats.Kugath
    } else if(character1 === "Nkari") {
        character1Stats = characterStats.Nkari
    }

    if (character2 === "TzarinaKatarina") {
        character2Stats = characterStats.TzarinaKatarina
    } else if (character2 === "Kostaltyn") {
        character2Stats = characterStats.Kostaltyn
    } else if (character2 === "Kugath") {
        character2Stats = characterStats.Kugath
    } else if (character2 === "Nkari") {
        character2Stats = characterStats.Nkari
    }

    obj.push(character1Stats, character2Stats)

    return obj;
}

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    next();
})

app.get(`/characters-one-comparisons/?`, (req, res) => {
    const query = req.query;
    const character1 = query.character1
    const character2 = query.character2

    const obj = test(character1, character2)

    res.send({
        healPoint: obj[0].healPoint - obj[1].healPoint,
        armor: obj[0].armor - obj[1].armor,
        leadership: obj[0].leadership - obj[1].leadership,
        speed: obj[0].speed - obj[1].speed,
        meleeAttack: obj[0].meleeAttack - obj[1].meleeAttack,
        meleeDefence: obj[0].meleeDefence - obj[1].meleeDefence,
        weaponStrength: obj[0].weaponStrength - obj[1].weaponStrength,
        chargeBonus: obj[0].chargeBonus - obj[1].chargeBonus
    })
})

app.listen(port, () => {
    console.log("Server listen port: " + port);
})