import { normalize,schema } from 'normalizr'

const posts = new schema.Entity('posts')

const users = new schema.Entity('users')

export default {
    posts,
    users,
}