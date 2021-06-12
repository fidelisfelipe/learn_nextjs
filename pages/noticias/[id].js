//define os path que devem ser antecipados no build
export async function getStaticPaths(){
    return {
        paths:[{
            params: {
                id: '1'
            }
        },{
            params: {
                id: '2'
            }
        }], 
        fallback: 'blocking'//
        //false: desabilita, então qualquer path não definido retornará 404
        //true: aceitará qualquer path informado e tentará gerar a página de forma assincrona
        //'blocking': bloqueará a requisição até que seja gerada a pagina completamente
    }
}
//para cada item do array será chamado 1 vez
export async function getStaticProps(context){
    await delay(5000);
    const id = context.params.id;
    return {
        props: {
            id: id
        }
    }
}

function Noticias(props){
    return <div>Noticias {props.id}</div>
}
export default Noticias;

//simular um delay
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}