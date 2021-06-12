import {useRouter} from 'next/router';
//o dado é criado no cliente-side
function Clientes(){
    const router = useRouter();
    const id = router.query.id;

    return <div>Clientes {id}</div>
}
export default Clientes;
