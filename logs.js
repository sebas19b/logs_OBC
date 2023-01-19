//Crea un nuevo proyecto de Node

//- Instala la dependencia Winston

//- En el archivo index.js crea una función que devuelva un error con un mensaje personalizado
	const er = val => {
		if(typeof val === 'number'){
			if(val !== 0){
				return 2 + val	
			}
		}
		throw new Error('Debe ser < 0')
	}
	
	
//- Registra el error en un archivo a través de un try...catch
const numero = 1
try{
	const valor = er(numero)
	console.log(valor)
}catch(e){
	console.error(e)
}