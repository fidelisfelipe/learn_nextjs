//o dado é recuperado no server-side
export async function getServerSideProps(context){
    const id = context.query.id;

    return {
        props: {
            id: id
        }
    }
}

function Produtos(props){
    return <div>Produto {props.id}</div>
}
export default Produtos;