import instance from './instance';
import { convertRESTAPI } from '../util';

/** 单图查看图片 */
function RealImg_get(opts) {
  return instance({
    method: 'get',
    url:  '/RealImg',
    opts: opts
  });
}

/** 套图—查看图片 */
function ImgBaseInfo_get(opts) {
  return instance({
    method: 'get',
    url:  '/ImgBaseInfo',
    opts: opts
  });
}

/** 设计师详情 */
function DesignerInfo_get(opts) {
  return instance({
    method: 'get',
    url:  '/DesignerInfo',
    opts: opts
  });
}

/** 0元设计 */
function DesignQuotation_post(opts) {
  return instance({
    method: 'post',
    url:  '/DesignQuotation',
    opts: opts
  });
}

/** 设计师作品 */
function Designer_Ep_get(opts) {
  return instance({
    method: 'get',
    url:  '/Designer_Ep',
    opts: opts
  });
}

/** 设计师列表 */
function GetSolrDesigner_get(opts) {
  return instance({
    method: 'get',
    url:  '/GetSolrDesigner',
    opts: opts
  });
}

/** 获取城市 */
function GetProvinceAndCity_get(opts) {
  return instance({
    method: 'get',
    url:  '/GetProvinceAndCity',
    opts: opts
  });
}

/** 效果图筛选条件 */
function LoadType_get(opts) {
  return instance({
    method: 'get',
    url:  '/LoadType',
    opts: opts
  });
}

/** 套图接口 */
function TXgt_get(opts) {
  return instance({
    method: 'get',
    url:  '/TXgt',
    opts: opts
  });
}

/** 单图接口 */
function DXgt_get(opts) {
  return instance({
    method: 'get',
    url:  '/DXgt',
    opts: opts
  });
}

export {
  RealImg_get,
  ImgBaseInfo_get,
  DesignerInfo_get,
  DesignQuotation_post,
  Designer_Ep_get,
  GetSolrDesigner_get,
  GetProvinceAndCity_get,
  LoadType_get,
  TXgt_get,
  DXgt_get
};
