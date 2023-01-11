import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import legacy_error as shared_legacy_error
from ..shared import on_demand_promotion as shared_on_demand_promotion


@dataclasses.dataclass
class GetVodPromotionsPathParams:
    ondemand_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    
class GetVodPromotionsFilterEnum(str, Enum):
    BATCH = "batch"
    DEFAULT = "default"
    SINGLE = "single"
    VIP = "vip"


@dataclasses.dataclass
class GetVodPromotionsQueryParams:
    filter: GetVodPromotionsFilterEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetVodPromotionsSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetVodPromotionsRequest:
    path_params: GetVodPromotionsPathParams = dataclasses.field()
    query_params: GetVodPromotionsQueryParams = dataclasses.field()
    security: GetVodPromotionsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetVodPromotionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    on_demand_promotion: Optional[shared_on_demand_promotion.OnDemandPromotion] = dataclasses.field(default=None)
    
