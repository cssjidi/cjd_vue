import { normalize,schema } from 'normalizr'

// const medicalinform = new schema.Entity('medicalinform')

// const signin = {signin:new schema.Array('signin')}

// const medicaldetail = {medicaldetail:new schema.Array('medicaldetail')}

// const accessory = {accessory:new schema.Array('accessory')}

// const download = {download:new schema.Array('download')}

// const medicallreport = new schema.Entity('medicallreport')

//const token ={token:new schema.Array('token')}

const post = new schema.Array(new schema.Entity('post',{},{idAttribute:'postId'}))

const signin = new schema.Entity('signin',{},{idAttribute:'id'})

const user = new schema.Entity('user',{},{idAttribute:'id'})

const paginator = new schema.Array(new schema.Entity('paginator',{},{idAttribute:'postId'}))

const image = new schema.Array(new schema.Entity('image',{},{idAttribute:'imageId'}))

const posts = new schema.Entity('newPost',{
	data:post,
	meta:paginator,
})

export default {
  //medicalinform,
  //medicaldetail,
  //accessory,
  //download,
  //medicallreport,
  //signin,
  //token,
  post,
  image,
  signin,
  user,
}
