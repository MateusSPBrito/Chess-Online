const _URL = 'http://localhost:3000'

const req = async (route, method, body) => {
    try {
        const res = await fetch(`${_URL}/${route}`, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });

        if (!res.ok) {
            throw new Error('Erro na requisição');
        }

        const data = await res.json();
        console.log('Resposta do servidor:', data);
    } catch (err) {
        console.error('Erro na requisição:', err);
    }
}