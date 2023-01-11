import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class EnableBrocadeSwitchPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnableBrocadeSwitchSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class EnableBrocadeSwitchRequest:
    path_params: EnableBrocadeSwitchPathParams = dataclasses.field()
    security: EnableBrocadeSwitchSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EnableBrocadeSwitchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
