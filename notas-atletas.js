class NotasAtletas{
    constructor(atletas){
        this.atletas=atletas;
    }
    atleta(){
        for(let i=0;i<this.atletas.length;i++){
            let nota=this.atletas[i].notas;
            nota=nota.sort(function (a, b) {
                return a - b;
              });
            let novo=nota.slice(1,4);
            let soma=0;
            novo.forEach(function(n){
                soma=soma+n;
            })
            let media=soma/novo.length;
            console.log(`Atleta: ${this.atletas[i].nome}`);
            console.log(`Notas obtidas: ${nota.join(", ")}`);
            console.log(`Média válida: ${media}`);

        }
    }
    
}

let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];

let atleta1=new NotasAtletas(atletas);
atleta1.atleta();