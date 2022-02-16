const xl = require('excel4node');
const wb = new xl.Workbook();
const ws = wb.addWorksheet('Alunos');

const headingColumnNames = [
    "Nome",
    "Idade",
    "Notas",
]

class Aluno {
     nome = '';
     idade = 0;
     nota = 0;
     constructor(nome,idade,nota) { 
          this.nome = nome;
          this.idade = idade;
          this.nota = nota;
      }
}

let aluno = new Aluno("Joao", "20", "7");
let aluno2 = new Aluno("Kleber", "23", "9");
let aluno3= new Aluno("Gabrielle", "18", "10");

const arr = [aluno, aluno2, aluno3];

const dados = arr.map(_=> Number(_.nota)).reduce((prev, curr) => prev + curr,0);
console.log(dados);

let headingColumnIndex = 1; 
headingColumnNames.forEach(heading => { 
    ws.cell(1, headingColumnIndex++).string(heading);
});
let rowIndex = 2; 
arr.forEach(record => { 
    let columnIndex = 1; 
    Object.keys(record).forEach(columnName =>{
        ws.cell(rowIndex,columnIndex++)
            .string(record [columnName])
    });
    rowIndex++; 
}); 

wb.write('Desafio05.xlsx');