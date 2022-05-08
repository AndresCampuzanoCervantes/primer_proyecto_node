const fs = require('fs');
const colors=require('colors');
const crearArchivo = async (base=5,listar=false,hasta=10)=>{
    try {
        let salida="", consola ='';
        for (let index = 1; index <= hasta; index++) {
            salida+=`${base} x ${index} = ${base*index}\n`;
            consola+=`${base.toString().blue} ${'x'.green} ${index.toString().blue} ${'='.green} ${(base*index).toString().blue}\n`;
        }

        if (listar) {
            console.log("==================================".green);
            console.log(`         tabla del: ${colors.blue(base)}`.green);
            console.log("==================================".green);
            console.log(consola);
        }

        fs.writeFileSync(`./output/tabla-${base}.txt`,salida);

        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
}

module.exports={
    crearArchivo
}