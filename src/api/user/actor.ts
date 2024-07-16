import http from '@/utils/http'
import type { PageRes } from '../types'
import type { IActor } from './types'

/**
 * @description 获取分页列表(带搜索)
 * @param page
 * @param limit
 * @param roleName
 * @returns {<PageRes<IActor.IResCreator>>}
 */
export function getActorList(params: IActor.IReqQuery) {
  return http.get<PageRes<IActor.IResActor>>(
    `/admin/user/actor/list/${params.pageSize}/${params.pageNum}`,
    { name: params.name },
  )
}
