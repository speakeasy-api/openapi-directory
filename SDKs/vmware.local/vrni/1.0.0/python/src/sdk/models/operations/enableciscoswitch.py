import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class EnableCiscoSwitchPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnableCiscoSwitchSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class EnableCiscoSwitchRequest:
    path_params: EnableCiscoSwitchPathParams = dataclasses.field()
    security: EnableCiscoSwitchSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EnableCiscoSwitchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
