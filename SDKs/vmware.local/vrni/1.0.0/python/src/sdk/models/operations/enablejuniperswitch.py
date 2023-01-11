import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class EnableJuniperSwitchPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnableJuniperSwitchSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class EnableJuniperSwitchRequest:
    path_params: EnableJuniperSwitchPathParams = dataclasses.field()
    security: EnableJuniperSwitchSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EnableJuniperSwitchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
