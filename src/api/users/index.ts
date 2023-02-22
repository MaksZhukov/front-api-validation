import axios from 'axios';
import { validUsersSchema } from './service';
import { User } from './types';

export const fetchUsers = async () => {
    try {
        const { data } = await axios<User[]>('https://api.github.com/users');
        return validUsersSchema(data);
    } catch (err) {}
};
