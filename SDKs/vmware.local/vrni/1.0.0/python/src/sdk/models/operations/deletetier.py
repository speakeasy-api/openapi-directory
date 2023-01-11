import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteTierPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    tier_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tier-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteTierSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DeleteTierRequest:
    path_params: DeleteTierPathParams = dataclasses.field()
    security: DeleteTierSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteTierResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
