import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DisableCiscoSwitchPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DisableCiscoSwitchSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DisableCiscoSwitchRequest:
    path_params: DisableCiscoSwitchPathParams = dataclasses.field()
    security: DisableCiscoSwitchSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DisableCiscoSwitchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
