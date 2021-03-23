import '../css/componentes.css';

export const saludar=(nombre)=>{

    console.log('Creando Etiqueta h1, en el HTM');
    const h1=document.createElement('h1');
    h1.innerText=`hola, ${nombre}`;
    document.body.append(h1);
    }