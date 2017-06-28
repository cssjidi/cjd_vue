import * as _ from 'lodash'
import { createSelector } from 'reselect'
import schema from '../../model/ufms/schema'
import * as $ from '../../model/selectors'


export const orderIdKey = () => 'orderId'

export const addr = state => state.orm.Address;

export const orderItemIdKey = () => 'uniform.item.id'

export const advNaviSelector = createSelector(
    $.orm,
    schema.createSelector(() => {
        return Object.assign({}, {
            title: {
                main: '广告通知',
            },
            lefts: [{
                icon: 'ti-angle-left',
                text: '返回',
                onClick: () => router.push('/'),
        }],
})
}),
)

export const bannerSelector = schema.createSelector(
        session => session.Banner.map(
        banner => Object.assign({}, banner.ref)))

export const changeNaviSelector = createSelector(
    $.orm,
    schema.createSelector(() =>
    Object.assign({}, {
        title: {
            main: '服装调换',
        },
        lefts: [{
            icon: 'angle left',
            text: '返回',
            onClick: () => router.push('/'),
    }],
}),
),
)



export const applicaationNaviSelector = createSelector(

    $.orm,

    schema.createSelector(() => {

        return Object.assign({}, {

            title: {

                main: '我的申请',

            },

            lefts: [{

                icon: 'angle left',

                text: '返回',

                onClick: () => router.push('/'),

        }],

})

}),

)

export const feedSelector = schema.createSelector(session => {
        return session.Feed.map(feed => {
            return Object.assign({}, feed.ref)
        })
})

export const notifSelector = createSelector(
    $.orm,
    schema.createSelector(orm => {
        return orm.Change.all()
            .filter(change => change.ref.type === 'notif')
return orm.Change.map(change => {
        return Object.assign({}, change.ref)
    })
}),
)

export const orders = createSelector(
        $.orm,
        schema.createSelector(orm => {
            return orm.Order.all()
                .filter(order => order.ref.id.length > 8)
        .orderBy(['year'], ['desc']).map(order => {
        return Object.assign({}, order.ref, {
            items: order.items.orderBy(['score'], ['desc']).withRefs.map(item => item)
    })
})
})
)

export const orderByYearMode = createSelector(
    $.orm,
    $.context,
    schema.createSelector((orm, context) => {
        try {
            const year = context.object, mode = context.orderMode
        const order = mode === 'default' ?
            orm.Order.get({year: year}) :
            orm.Order.get({year: year, mode: mode})
        return Object.assign({}, order.ref, {
            items: order.items.orderBy(['score'], ['desc']).withRefs.map(item => item)
    })} catch (e) {
    return null
}
})
)

export const itemById = createSelector(
    $.orm,
    $.context,
    schema.createSelector((orm, context) => {
        try {
            const item = orm.OrderItem.withId(context.object)
            return item.ref
        } catch (e) {
            return null
        }
    })
)

export const yearNavi = createSelector(
    schema.createSelector(() => {
        return Object.assign({}, {
            title: {
                main: '历史申请'
            },
            lefts: [{
                icon: 'ti-close',
                onClick: () => router.push('/')
        }]
})
})
)

export const orderNaviSelector = createSelector(
    $.orm,
    orderByYearMode,
    schema.createSelector((orm, order) => {
        let title = (order ? order.year : '') + '年度'
        return Object.assign({}, {
            title: {
                main: title
            },
            lefts: [{
                icon: 'ti-angle-left',
                text: '返回',
                onClick: () => router.push('/')
        }, {
                icon: 'ti-close',
                onClick: () => router.push('/')
    }]
})
})
)

export const itemNavi = createSelector(
    $.orm,
    itemById,
    schema.createSelector((orm, item) => {
        if (!item)
return null
const order = orm.Order.withId(item.pid).ref
return Object.assign({}, {
    title: {
        main: item.name
    },
    lefts: [{
        icon: 'ti-angle-left',
        text: order.year + '年度',
        onClick: () => router.push('/uniform/order/' + order.year)
}]
})
})
)

export const sizes = createSelector(
    $.orm,
    itemById,
    schema.createSelector((orm, item) => {
        if (!item)
return null
try {
    const sizes = orm.Size.all()
            .filter(size => size.baseCode === item.baseCode)
.orderBy(['size'])
        .toRefArray()
    return [...sizes.map(size => ({
            value: size.detailCode,
            label: size.size ? `${size.size}码` : '均码'
        }))]
} catch (e) {
    return []
}
})
)

export const profileSelector = createSelector(
    $.orm,
    schema.createSelector(orm => {
        return orm.Profile.map(profile => {
            return Object.assign({}, profile.ref)
        })
})
)

export const UnameSelector = createSelector(
    $.orm,
    schema.createSelector(orm => {
        return orm.Uname.map(profile => {
            return Object.assign({}, uname.ref)
        })
})
)

export const userNaviSelector = createSelector(
    $.orm,
    schema.createSelector((orm) => {
        return Object.assign({}, {
            title: {
                main: '我的资料'
            },
            lefts: [{
                icon: 'ti-angle-left',
                text: '返回',
                onClick: () => router.push('/')
        }]
})
})
)

export const infoNaviSelector = createSelector(
    $.orm,
    schema.createSelector(() => {
        return Object.assign({}, {
            title: {
                main: '',
            },
            lefts: [{
                icon: 'angle left',
                text: '返回',
                onClick: () => router.push('/notice'),
        }],
})
}),
)

export const changeInfoNaviSelector = createSelector(
    $.orm,
    schema.createSelector(() => {
        return Object.assign({}, {
            title: {
                main: '详情',
            },
            lefts: [{
                icon: 'ti-angle-left',
                text: '返回',
                onClick: () => router.push('/Uniformchange'),
        }],
})
}),
)

export const changePublishNaviSelector = createSelector(
    $.orm,
    schema.createSelector(() => {
        return Object.assign({}, {
            title: {
                main: '发布调换信息',
            },
            lefts: [{
                icon: 'angle left',
                text: '返回',
                onClick: () => router.push('/Uniformchange'),
        }],
})
}),
)

export const sizeTableNaviSelector = createSelector(
    $.orm,
    schema.createSelector(() => {
        return Object.assign({}, {
            title: {
                main: '尺码',
            },
            lefts: [{
                icon: 'angle left',
                text: '返回',
                onClick: () => router.goBack(-1),
        }],
})
}),
)

export const sizeTableListNaviSelector = createSelector(
    $.orm,
    $.context,
    schema.createSelector((orm, context) => {
        return Object.assign({}, {
            title: {
                main: context.title,
            },
            lefts: [{
                icon: 'angle left',
                text: '返回',
                onClick: () => router.goBack(-1),
        }],
})
}),
)

export const changeUpdateNaviSelector = createSelector(
    $.orm,
    schema.createSelector(() => {
        return Object.assign({}, {
            title: {
                main: '修改调换信息',
            },
            lefts: [{
                icon: 'angle left',
                text: '返回',
                onClick: () => router.push('/Uniformchange'),
        }],
})
}),
)
export const swapAllSelector = createSelector(
        $.orm,
        schema.createSelector(orm => {
            return orm.Change.all()
                .filter(change => change.ref.type.indexOf('swap-all') > -1)
        .filter(change => change.ref.isDelect === false)
.orderBy(['date'], ['desc'])
return orm.Change.map(change => {
        return Object.assign({}, change.ref)
    })
}),
)

export const swapAiSelector = createSelector(
        $.orm,
        schema.createSelector(orm => {
            return orm.Change.all()
                .filter(change => change.ref.type.indexOf('swap-ai') > -1)
        .filter(change => change.ref.isDelect === false)
.orderBy(['date'], ['desc'])
return orm.Change.map(change => {
        return Object.assign({}, change.ref)
    })
}),
)

export const swapMineSelector = createSelector(
        $.orm,
        schema.createSelector(orm => {
            return orm.Change.all()
                .filter(change => change.ref.type.indexOf('swap-mine') > -1)
        .filter(change => change.ref.isDelect === false)
.orderBy(['date'], ['desc'])
return orm.Change.map(change => {
        return Object.assign({}, change.ref)
    })
}),
)

export const uniformNameSelector = createSelector(
    $.orm,
    schema.createSelector(orm => {
        return orm.Uname.map(uname => {
            return Object.assign({}, uname.ref)
        })
}),
)

export const uniformSizeSelector = createSelector(
    $.orm,
    $.context,
    schema.createSelector((orm, context) => {
        return orm.Usize.all()
            .filter(usize => usize.ref.baseCode === context.baseCode)
const orderBySize = usize.ref.size.toString()
    .orderBy(['orderBySize'], ['acs'])
return orm.Usize.map(usize => {
        return Object.assign({}, usize.ref)
    })
}),
)
export const uniformSizeAllSelector = createSelector(
    $.orm,
    $.context,
    schema.createSelector((orm, context) => {
        orm.Usize.map(usize => {
        usize.ref.size = usize.ref.size.length === 1 ? '  ' + usize.ref.size :
        usize.ref.size.length === 2 ? ' ' + usize.ref.size : usize.ref.size
})
return orm.Usize.orderBy(['size'], ['acs'])
        .map(usize => {
        return Object.assign({}, usize.ref)
    })
}),
)

export const chothingSelector = createSelector(
    $.orm,
    schema.createSelector(orm => {
        return orm.Change.all()
            .filter(change => change.ref.type === 'chothing')
return orm.Change.map(change => {
        return Object.assign({}, change.ref)
    })
}),
)

export const advertisementById = createSelector(
    $.orm,
    $.context,
    schema.createSelector((orm, context) => {
        try {
            return orm.Change.all()
                .filter(change => change.ref.id === context.object)
const advertisement = orm.Change.withId(context.object)
return advertisement.ref
} catch (e) {
    return null
}
}),
)

export const updateById = createSelector(
    $.orm,
    $.context,
    schema.createSelector((orm, context) => {
        try {
            return orm.Change.all()
                .filter(change => change.ref.id === context.object)
const updateInfo = orm.Change.withId(context.object)
return updateInfo.ref
} catch (e) {
    return null
}
}),
)

/* export const contact = createSelector(
 $.orm,
 schema.createSelector(orm => {
 return orm.Contact.map(profile => {
 return Object.assign({}, profile.ref)
 })
 })
 ) */

export const contact = createSelector(
    $.orm,
    schema.createSelector(
        orm => {
        return orm.Contact.all()
            .orderBy(['unit','desc'],['depot','desc'])
            .map( profile => { return Object.assign({}, profile.ref)} ) })

)

export const clothingSize = createSelector(
    $.orm,
    schema.createSelector(orm => {
        return orm.ClothingSize.map(items => {
            return Object.assign({}, items.ref)
        })
}),
)

export const applicationTimeSelector = createSelector(
    $.orm,
    schema.createSelector(orm => {
        return orm.Time.map(time => {
            return Object.assign({}, time.ref)
        })
}),
)

export const applicationOrderSelector = createSelector(
    $.orm,
    $.context,
    schema.createSelector((orm, context) => {
        // return orm.OrderItem.all()
        //     .filter(items => items.ref.pid === context.orderId)
        return orm.OrderItem.map(items => {
            return Object.assign({}, items.ref)
        })
}),
)


export const chooseOrderSelector = createSelector(
    $.orm,
    $.context,
    schema.createSelector((orm, context) => {

        return orm.OrderItem.map(items => {
            return Object.assign({}, items.ref)
        })
}),
)

export const freeOrderSelector = createSelector(
    $.orm,
    $.context,
    schema.createSelector((orm, context) => {
        return orm.Order.map(items => {
            return Object.assign({}, items.ref)
        })
}),
)

export const updateOrderSelector = createSelector(
    $.orm,
    $.context,
    schema.createSelector((orm, context) => {
        return orm.Torder.map(items => {
            return Object.assign({}, items.ref)
        })
}),
)

export const UyearSelector = createSelector(
    $.orm,
    schema.createSelector(orm => {
        return orm.Uyear.map(year => {
            return Object.assign({}, year.ref)
        })
}),
)
export const applicationchooseSelector = createSelector(
    $.orm,
    schema.createSelector(() => {
        return Object.assign({}, {
            title: {
                main: '服装申请',
            },
            lefts: [{
                icon: 'angle left',
                text: '返回',
                onClick: () => router.push('/Mainhome'),
        }],
})
}),
)

export const  mainhomeTitle = createSelector(
    $.orm,
        schema.createSelector((orm) => {
            return Object.assign({}, {
                title: {
                    main: '服装e选',
                }
            })
        }),
    )

export const settingTitle = createSelector(
    $.orm,
    schema.createSelector((orm) => {
        return Object.assign({}, {
            title: {
                main: '设置',
            },
            lefts: [{
                icon: 'angle left',
                text: '返回',
                onClick: () => router.goBack(-1),
        }],
})
}),
)

export const feedbackTitle = createSelector(
    $.orm,
    schema.createSelector((orm) => {
        return Object.assign({}, {
            title: {
                main: '意见建议',
            },
            lefts: [{
                icon: 'angle left',
                text: '返回',
                onClick: () => router.goBack(-1),
        }],
})
}),
)

export const contactTitle = createSelector(
    $.orm,
    schema.createSelector((orm) => {
        return Object.assign({}, {
            title: {
                main: '联系我们',
            },
            lefts: [{
                icon: 'angle left',
                text: '返回',
                onClick: () => router.goBack(-1),
        }],
})
}),
)
export const clothingSizeTitle = createSelector(
    $.orm,
    schema.createSelector((orm) => {
        return Object.assign({}, {
            title: {
                main: '服装规格',
            },
            lefts: [{
                icon: 'angle left',
                text: '返回',
                onClick: () => router.goBack(-1),
        }],
})
}),
)

export const addressTitle = createSelector(
    $.orm,
    schema.createSelector((orm) => {
        return Object.assign({}, {
            title: {
                main: '收货地址',
            },
            lefts: [{
                icon: 'angle left',
                text: '返回',
                onClick: () => router.goBack(-1),
        }],
})
}),
)

export const addAddressTitle = createSelector(
    $.orm,
    schema.createSelector((orm) => {
        return Object.assign({}, {
            title: {
                main: '添加新地址',
            },
            lefts: [{
                icon: 'angle left',
                text: '返回',
                onClick: () => router.goBack(-1),
        }],
})
}),
)

export const editAddressTitle = createSelector(
    $.orm,
    schema.createSelector((orm) => {
        return Object.assign({}, {
            title: {
                main: '编辑地址',
            },
            lefts: [{
                icon: 'angle left',
                text: '返回',
                onClick: () => router.goBack(-1),
        }],
})
}),
)

export const addressByIdss = createSelector(
    $.orm,
    $.context,
    schema.createSelector((orm, context) => {
        try {
            return orm.Address.all()
                .filter(address => address.ref.id==context.object)
const address = orm.Address.withId(context.object)
return address.ref
} catch (e) {
    return null
}
}),
)
export const addressById = createSelector(
    $.orm,
    $.context,
    schema.createSelector((orm, context) => {
        try {
            const item = orm.Address.withId(context.object)
            return item.ref
        } catch (e) {
            return null
        }
    })
)
export const ByYear = createSelector(
    $.orm,
    $.context,
    schema.createSelector((orm, context) => {
        try {
            const item = orm.Year.withId(context.object)
            return item.ref
        } catch (e) {
            return null
        }
    })
)



export const noticeTitle = createSelector(
    $.orm,
    schema.createSelector((orm) => {
        return Object.assign({}, {
            title: {
                main: '通知公告',
            },
            lefts: [{
                icon: 'angle left',
                text: '返回',
                onClick: () => router.push('/Mainhome'),
        }],
})
}),
)

export const applyTitle = createSelector(
    $.orm,
    schema.createSelector((orm) => {
        return Object.assign({}, {
            title: {
                main: '服装申请',
            },
            lefts: [{
                icon: 'angle left',
                text: '返回',
                onClick: () => router.push('/Mainhome'),
        }],
})
}),
)

export const applypastTitle = createSelector(
    $.orm,
    schema.createSelector((orm) => {
        return Object.assign({}, {
            title: {
                main: '历史申请记录',
            },
            lefts: [{
                icon: 'angle left',
                text: '返回',
                onClick: () => router.goBack(-1),
        }],
})
}),
)

export const address= createSelector(
        $.orm,
        $.context,
        schema.createSelector(
            (orm,context) => {
            return orm.Address.all()
                .filter(address => address.isDelect === false)
        .orderBy(['status'],['desc'])
        .map( profile => { return Object.assign({}, profile.ref)} )

})
)



export const district = createSelector(
        $.orm,
        $.context,
        schema.createSelector((orm, context) => {
            return orm.District.all()
                .filter(district => district.ref.parentId == context.areaParentId)
        .orderBy(['id','desc'])
        .map( profile => { return Object.assign({}, profile.ref)} )
})

)

export const city = createSelector(
        $.orm,
        $.context,
        schema.createSelector((orm, context) => {
            return orm.City.all()
                .filter(city => city.ref.parentId == context.parentId)
        .orderBy(['id','desc'])
        .map( profile => { return Object.assign({}, profile.ref)} )
})
)

export const region = createSelector(
    $.orm,
    $.context,
    schema.createSelector(
        (orm,context) => {
        return orm.Region.all()
            .orderBy(['id','desc'])
            .map( profile => { return Object.assign({}, profile.ref)} ) })

)

export const past = createSelector(
        $.orm,
        $.context,
        schema.createSelector((orm, context) => {
            return orm.Past.all()
                .filter(past => past.ref.applyYear == context.applyYear)
        .map( profile => { return Object.assign({}, profile.ref)} )
})

)
export const year = createSelector(
    $.orm,
    $.context,
    schema.createSelector((orm, context) => {
        return orm.Year.all()
            .map( profile => { return Object.assign({}, profile.ref)} ) })

)

export const clothingSizeList = createSelector(
        $.orm,
        $.context,
        schema.createSelector((orm, context) => {
            return orm.ClothingSizeList.all()
                .filter(size => size.ref.baseCode == context.object)
        .map(profile => { return Object.assign({}, profile.ref)})
})
)

export const clothingSizeFormatItems = createSelector(
    $.orm,
    $.context,
    schema.createSelector((orm, context) => {
        return orm.ClothingSizeList.all()
            .filter(size => size.ref.baseCode == context.object)
    .map( (profile) => {
    const formatItems = _.values(profile.ref.formatItems)
    const len = formatItems.length
    const itemTitle = len > 5 ? _.chunk(formatItems, 2) : formatItems
    profile.ref.newItems = itemTitle
return profile.ref.newItems
})
})
)

export const clothingSizeFormatValues = createSelector(
    $.orm,
    $.context,
    schema.createSelector((orm, context) => {
        return orm.ClothingSizeList.all()
            .filter(size => size.ref.baseCode == context.object)
    .map( profile => {
    profile.ref.formatValues.map((items,index) => {
    const itemValues = _.values(items.values)
    const len = itemValues.length
    const content = len > 5 ? _.chunk(itemValues, 2) : itemValues
    items.newValues = content
return items
})
return profile.ref.formatValues
})
})
)


