import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DisableDellSwitchPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DisableDellSwitchSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DisableDellSwitchRequest:
    path_params: DisableDellSwitchPathParams = dataclasses.field()
    security: DisableDellSwitchSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DisableDellSwitchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
