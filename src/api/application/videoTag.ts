import http from '@/utils/http'
import type { PageRes } from '../types'
import type { IVideoTag } from './types'

/**
 * @description 获取分页列表(带搜索)
 * @param page
 * @param limit
 * @param roleName
 * @returns {<PageRes<IVideoTag.IResChannel>>}
 */
export function getVideoTagList(params: IVideoTag.IReqQuery) {
  return http.get<PageRes<IVideoTag.IResVideoTag>>(
    `/admin/application/videoTag/list/${params.pageSize}/${params.pageNum}`,
    { name: params.name },
  )
}
