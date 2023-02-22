import { UsersSchema } from './schemas';
import { User } from './types';

export const validUsersSchema = (data: User[]) => {
    const validatedUsersModel = UsersSchema.validate(data);
    if (validatedUsersModel.error) {
        console.error(validatedUsersModel);
        return [];
    }
    return validatedUsersModel.value;
};
