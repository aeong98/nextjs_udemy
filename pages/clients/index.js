import Link from 'next/link';
// 전체 client 들을 보여주는 페이지


function ClientsPage (){
    const clients=[
        {id:'max', name:'Maximilian'},
        {id:'menu', name:'Manuel'},
        {id:'sar', name:'Sarah'},

    ]
    return(
        <>
            <div>
                <h1>The CLients Page</h1>
            </div>
            <ul>
                {clients.map((client)=>{
                    console.log(client);
                    return(
                        <li key={client.id}>
                            <Link href={{
                                pathname :`/clients/[id]`,
                                query : {id:client.id},
                            }}>{client.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default ClientsPage;