import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import legacy_error as shared_legacy_error
from ..shared import on_demand_promotion_code as shared_on_demand_promotion_code


@dataclasses.dataclass
class GetVodPromotionCodesPathParams:
    ondemand_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    promotion_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'promotion_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVodPromotionCodesQueryParams:
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetVodPromotionCodesSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetVodPromotionCodesRequest:
    path_params: GetVodPromotionCodesPathParams = dataclasses.field()
    query_params: GetVodPromotionCodesQueryParams = dataclasses.field()
    security: GetVodPromotionCodesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetVodPromotionCodesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    on_demand_promotion_code: Optional[shared_on_demand_promotion_code.OnDemandPromotionCode] = dataclasses.field(default=None)
    
