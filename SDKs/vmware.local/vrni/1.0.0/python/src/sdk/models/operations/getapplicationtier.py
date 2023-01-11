import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import tier as shared_tier


@dataclasses.dataclass
class GetApplicationTierPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    tier_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tier-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetApplicationTierSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetApplicationTierRequest:
    path_params: GetApplicationTierPathParams = dataclasses.field()
    security: GetApplicationTierSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetApplicationTierResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tier: Optional[shared_tier.Tier] = dataclasses.field(default=None)
    
