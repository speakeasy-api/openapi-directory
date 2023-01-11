import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import tierrequest as shared_tierrequest
from ..shared import apierror as shared_apierror
from ..shared import tier as shared_tier


@dataclasses.dataclass
class AddTierPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AddTierSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class AddTierRequest:
    path_params: AddTierPathParams = dataclasses.field()
    request: shared_tierrequest.TierRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: AddTierSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AddTierResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    tier: Optional[shared_tier.Tier] = dataclasses.field(default=None)
    
