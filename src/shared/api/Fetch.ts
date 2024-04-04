const Fetch = (baseUrl: string, credentials: RequestCredentials = 'same-origin', headers?: any) => {
    const get = async (slug: string) => {
        const accessToken = localStorage.getItem('accessToken') ?? null;
        const response = await fetch(baseUrl + slug, {
            credentials,
            headers: {Authorization: headers?.Authorization ?? `Bearer ${accessToken}`},
        });
        const data = await response.json();
        return {data};
    };
    const post = async (slug: string, body: object = {}) => {
        //const accessToken = localStorage.getItem('accessToken') ?? null;
        const response = await fetch(baseUrl + slug, {
            credentials,
            method: 'POST',
            headers: {
                //Authorization: headers?.Authorization ?? `Bearer ${accessToken}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        const data = await response.json();
        return {data};
    };

    const put = async (slug: string, body: object = {}) => {
        const accessToken = localStorage.getItem('accessToken') ?? null;
        const response = await fetch(baseUrl + slug, {
            credentials,
            method: 'PUT',
            headers: {
                Authorization: headers?.Authorization ?? `Bearer ${accessToken}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        const data = await response.json();
        return {data};
    };
    return {get, post, put};
};

export default Fetch;
