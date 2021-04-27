import Link from 'next/link'

function ClientsPage() {

    const clients = [
        { id: 'arfiz', name: 'Arfiz' },
        { id: 'farez', name: 'Farez' }
    ];
    return (
        <div>
            <h1>The Clients Page</h1>
            <ul>
                {clients.map(c => <li key={c.id}>
                    <Link href={{
                        pathname: '/clients/[id]',
                        query: { id: c.id }
                    }}>{c.name}</Link>
                </li>)}
            </ul>
        </div>
    )
}
export default ClientsPage;
