import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DisableBrocadeSwitchPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DisableBrocadeSwitchSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DisableBrocadeSwitchRequest:
    path_params: DisableBrocadeSwitchPathParams = dataclasses.field()
    security: DisableBrocadeSwitchSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DisableBrocadeSwitchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
