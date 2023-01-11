import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import tier as shared_tier


@dataclasses.dataclass
class GetTierPathParams:
    tier_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tier-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTierHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTierSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetTierRequest:
    headers: GetTierHeaders = dataclasses.field()
    path_params: GetTierPathParams = dataclasses.field()
    security: GetTierSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTierResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tier: Optional[shared_tier.Tier] = dataclasses.field(default=None)
    
