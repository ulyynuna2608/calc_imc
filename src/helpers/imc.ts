export type Level = {
    title: string;
    color: String;
    icon: 'down' | 'up';
    imc: number[];
    yourIMC?: number;
}

export const levels: Level[] = [
    {title: 'Magreza', color:'#0096d1', icon:'down', imc:[0, 18.5]},

    {title: 'Normal', color:'#5cff8f', icon:'up', imc:[18.6, 24.9]},

    {title: 'Sobrepeso', color:'#5E2B039', icon:'down', imc:[25, 30]},

    {title: 'Obesidade', color:'#C3423F', icon:'down', imc:[30.1, 99]},
];

export const calculeiIMC = (altura:number, peso:number) => {
    const imc = peso / (altura * altura);

    for (let i in levels){
        if (imc >=  levels[i].imc[0] && imc <= levels[i].imc[1]){
            levels[i].yourIMC = imc;
            return levels[i];
        }
    }
    return null;
}


//todo conteudo que esta dentro de chaves {} é um objeto;
//todo conteudo que esta dentro de [] é um depósito(array ou matriz vetor);