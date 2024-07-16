import http from '@/utils/http'
import type { PageRes } from '../types'
import type { ICreateLevel } from './types'

/**
 * @description 获取分页列表(带搜索)
 * @param page
 * @param limit
 * @param roleName
 * @returns {<PageRes<IResVideoTag.IResCreateLevel>>}
 */
export function getCreateLevelList(params: ICreateLevel.IReqQuery) {
  return http.get<PageRes<ICreateLevel.IResCreateLevel>>(
    `/admin/application/createLevel/list/${params.pageSize}/${params.pageNum}`,
    { name: params.name },
  )
}
