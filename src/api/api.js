// 权限管理API  【菜单、角色、权限】
import request from '@/api/request'

/**
 * 添加菜单
 * @param {*} data
 * @author 小道仙
 * @date 2020年2月19日
 */
export const index = (data) =>
    request({
        url: '/list',
        method: 'get',
        data
    })
export function postaddlist(data) {
    return request({
        url: '/addlist',
        method: 'post',
        data
    })
}
export function postuploader(data) {
    return request({
        url: '/upload',
        method: 'post',
        data
    })
}

// export function getDeleteDiary = (aid) => {
//     return request({
//         url: '/destroy/id='+aid,
//         method: 'delete',
//     })
// }
export const  getDeleteDiary = (id) => {
    request({
        url: `/destroy/${id}`,
        method: 'get',
    })
}