import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class EnableAristaSwitchPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnableAristaSwitchSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class EnableAristaSwitchRequest:
    path_params: EnableAristaSwitchPathParams = dataclasses.field()
    security: EnableAristaSwitchSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EnableAristaSwitchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
