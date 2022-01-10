// 특정 클라이언트의 프로젝트들을 보여주는 페이지
// useRouter : Navigating Programmatically
import {useRouter} from 'next/router';

function ClientProjectsPage (){
    const router= useRouter();

    console.log(router.query);

    function loadProjectHandler (){
        // load data...
        // router.push('/clients/max/projecta');
        router.push({
            pathname: '/clients/[id]/[clientprojectid]',
            query : {id :'max', clientprojectid :'projecta'},
        });
        // replace ( 뒤로 가기 눌렀을 때 전에 갈 수 없음)
    }

    return(
        <div>
            <h1>The Projects of a Given Client</h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    )
}

export default ClientProjectsPage;