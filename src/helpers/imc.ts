export type Level = {
    title: string;
    color: string;
    icon: 'down' | 'up';
    imc: number[];
    yourIMC?: number;
}

export const levels: Level[] = [
    {title: 'Magreza', color:'#2392db', icon:'down', imc:[0, 18.5]},

    {title: 'Normal', color:'#23db5a', icon:'up', imc:[18.6, 24.9]},

    {title: 'Sobrepeso', color:'#ffc830', icon:'down', imc:[25, 30]},

    {title: 'Obesidade', color:'#C3423F', icon:'down', imc:[30.1, 99]},
];

export const calculeiIMC = (altura:number, peso:number) => {
    const imc = peso / (altura * altura);

    for (let i in levels){
        if (imc >=  levels[i].imc[0] && imc <= levels[i].imc[1]){
            let levelCopy: Level = { ...levels[i]};
            levelCopy.yourIMC = imc;
            return levelCopy;
        }
    }
    return null;
}


//todo conteudo que esta dentro de chaves {} é um objeto;
//todo conteudo que esta dentro de [] é um depósito(array ou matriz vetor);