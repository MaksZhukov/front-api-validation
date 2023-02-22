import Joi from 'joi';
import { User } from './types';

export const UserSchema = Joi.object<User>({
    login: Joi.string(),
    id: Joi.number(),
    node_id: Joi.string(),
    avatar_url: Joi.string(),
    gravatar_id: Joi.string().allow(''),
    url: Joi.string(),
    html_url: Joi.string(),
    followers_url: Joi.string(),
    following_url: Joi.string(),
    gists_url: Joi.string(),
    starred_url: Joi.string(),
    subscriptions_url: Joi.string(),
    organizations_url: Joi.string(),
    repos_url: Joi.string(),
    events_url: Joi.string(),
    received_events_url: Joi.string(),
    type: Joi.valid('User', 'Organization'),
    site_admin: Joi.boolean()
}).options({ abortEarly: false });

export const UsersSchema = Joi.array<User[]>().items(UserSchema).options({ abortEarly: false });
