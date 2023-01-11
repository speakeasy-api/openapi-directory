import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DisableJuniperSwitchPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DisableJuniperSwitchSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DisableJuniperSwitchRequest:
    path_params: DisableJuniperSwitchPathParams = dataclasses.field()
    security: DisableJuniperSwitchSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DisableJuniperSwitchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
