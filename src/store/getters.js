import _ from 'lodash'

export const orm = state => state.orm

export const getList = state => {
    const list = state.orm.test.itemsById
    return _.filter(list,{'status':'1'})
}

// export const cartProducts = state => {
//     return state.test.itemById.map(() => {
//         return {
//             title: product.title,
//             price: product.price,
//         }
//     })
// }