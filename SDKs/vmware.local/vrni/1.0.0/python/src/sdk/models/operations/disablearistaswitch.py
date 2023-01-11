import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DisableAristaSwitchPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DisableAristaSwitchSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DisableAristaSwitchRequest:
    path_params: DisableAristaSwitchPathParams = dataclasses.field()
    security: DisableAristaSwitchSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DisableAristaSwitchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
