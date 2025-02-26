import http from '@/utils/http'
import type { PageRes } from '../types'
import type { ILive } from './types'

/**
 * @description 获取分页列表(带搜索)
 * @param page
 * @param limit
 * @param roleName
 * @returns {<PageRes<ILive.IResLive>>}
 */
export function getLiveList(params: ILive.IReqQuery) {
  // 上传时间
  const liveStartTime =
    params.startTime && params.startTime.length > 0 && params.startTime[0]
  const liveEndTime =
    params.startTime && params.startTime.length > 0 && params.startTime[1]

  return http.get<PageRes<ILive.IResLive>>(
    `/admin/content/live/list/${params.pageSize}/${params.pageNum}`,
    {
      title: params.title,
      liveStatus: params.liveStatus,
      liveStartTime,
      liveEndTime,
    },
  )
}
