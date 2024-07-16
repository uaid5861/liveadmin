import http from '@/utils/http'
import type { PageRes } from '../types'
import type { IShortVideo, ISelectItem } from './types'

/**
 * @description 获取分页列表(带搜索)
 * @param page
 * @param limit
 * @param roleName
 * @returns {<PageRes<IShortVideo.IResShortVideo>>}
 */
export function getShortVideoList(params: IShortVideo.IReqQuery) {
  // 上传时间
  const uploadStartTime =
    params.uploadTime && params.uploadTime.length > 0 && params.uploadTime[0]
  const uploadEndTime =
    params.uploadTime && params.uploadTime.length > 0 && params.uploadTime[1]

  // 审核时间
  const authStartTime =
    params.authTime && params.authTime.length > 0 && params.authTime[0]
  const authEndTime =
    params.authTime && params.authTime.length > 0 && params.authTime[1]
  return http.get<PageRes<IShortVideo.IResShortVideo>>(
    `/admin/content/shortVideo/list/${params.pageSize}/${params.pageNum}`,
    {
      title: params.title,
      author: params.author,
      authStatus: params.authStatus,
      tagName: params.tagName,
      uploadStartTime,
      uploadEndTime,
      authStartTime,
      authEndTime,
    },
  )
}

/** 标签 */
export function getTagList() {
  return http.get<PageRes<ISelectItem[]>>('/admin/content/shortVideo/tag')
}
