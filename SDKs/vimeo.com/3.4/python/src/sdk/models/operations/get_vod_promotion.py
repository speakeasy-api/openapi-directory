import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import legacy_error as shared_legacy_error
from ..shared import on_demand_promotion as shared_on_demand_promotion


@dataclasses.dataclass
class GetVodPromotionPathParams:
    ondemand_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    promotion_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'promotion_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVodPromotionSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetVodPromotionRequest:
    path_params: GetVodPromotionPathParams = dataclasses.field()
    security: GetVodPromotionSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetVodPromotionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    on_demand_promotion: Optional[shared_on_demand_promotion.OnDemandPromotion] = dataclasses.field(default=None)
    
