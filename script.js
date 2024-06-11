function averiguarValor() {
    let nome = document.getElementById("name").value;
    let salario = parseFloat(document.getElementById("sal").value);
    let dependentes = parseInt(document.getElementById("dep").value);

    let aumento = 0;
    if (salario <= 1500) {
        if (dependentes === 1) {
            aumento = 0.15;
        } else if (dependentes === 2) {
            aumento = 0.25;
        } else if (dependentes === 3) {
            salario = 2000;
            alert(`${nome}, você receberá um aumento, seu novo salário será R$ ${salario}`);
            return
        }
        else {
            alert(`${nome}, Você possui dependentes demais, passe na recepção para demissão`);
            return
        }
    } 
    
    else if (salario <= 2000) {
        if (dependentes === 1) {
            aumento = 0;
        } else if (dependentes === 2) {
            aumento = 0;
        } else if (dependentes === 3) {
            aumento = 0.15;
        } else {
            alert(`${nome}, Você possui dependentes demais, passe na recepção para demissão`);
            retur
        }
    }

    if (aumento > 0) {
        let novoSalario = salario + (salario * aumento);
        alert(`${nome}, você receberá um aumento de ${aumento * 100}%. Seu novo salário será R$ ${novoSalario}`);
    } else {
        alert(`${nome}, você não receberá um aumento.`);
    }
}