import { useRouter } from 'next/router'

export default function ClientProjectPage() {

    const router = useRouter();

    console.log(router.query);

    function loadProjectHandler() {
        router.push({
            pathname: '/clients/[id]/[projectId]',
            query: { id: 'arfiz', projectId: 'projecta' }
        })
    }

    return (
        <div>
            <h1>The Projects of a Selected Client</h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    )
}
