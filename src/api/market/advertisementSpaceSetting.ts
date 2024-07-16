import http from '@/utils/http'
import type { AdSpaceSetting } from './types'

/**
 * @description 获取广告位设置信息
 */
export function getAdSpaceSettingList() {
  return http.get<AdSpaceSetting.Data>(
    `/admin/market/advertisementSpaceSetting/list`,
  )
}
/**
 * @description 更新广告位设置信息
 */
export function updateAdSpaceSettingList(params: AdSpaceSetting.Data) {
  return http.post<AdSpaceSetting.Data>(
    `/admin/market/advertisementSpaceSetting/update`,
    params,
  )
}
