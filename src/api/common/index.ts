import http from '@/utils/http'
import type { IReqStatus, Upload } from './types'

/** 修改状态 */
export function changeStatus(params: IReqStatus) {
  return http.post<any>(`/admin/common/changeStatus/${params.type}`, {
    id: params.id,
    status: params.status,
  })
}

/** 上传图片 */
export function uploadImg(params: FormData) {
  return http.post<Upload.ResFileUrl>(`/admin/file/upload/img`, params)
}
