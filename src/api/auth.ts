const dummyUser = {
    id: 'root',
    password: 'root',
};

export async function login(id: string, password: string) {
    try {
        console.log(id, password);

        return {
            isOk: true,
            data: dummyUser,
        };
    } catch {
        return {
            isOk: false,
            message: 'Authentication failed',
        };
    }
    //   const response = await axios.post(`${API_URL}/auth/login`, {
    //     email,
    //     password,
    //   });
    //   return response.data;
}
