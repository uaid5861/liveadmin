import http from '@/utils/http'
import type { FreeVideoPermission } from './types'

/**
 * @description 获取免费视频权限设置信息
 */
export function getFreeVideoPermission() {
  return http.get<FreeVideoPermission.Data>(
    `/admin/market/freeVideoPermissionManager/list`,
  )
}
/**
 * @description 更新免费视频权限设置信息
 */
export function updateFreeVideoPermission(params: FreeVideoPermission.Data) {
  return http.post<FreeVideoPermission.Data>(
    `/admin/market/advertisementSpaceSetting/update`,
    params,
  )
}
