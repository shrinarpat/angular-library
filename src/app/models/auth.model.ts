export interface User {
    role: string;
    photo: string;
    _id: string;
    name: string;
    email: string;
    __v: number;
}


export interface loginResponseModel {
    status: string;
    data: {
        user: User
    }
}
