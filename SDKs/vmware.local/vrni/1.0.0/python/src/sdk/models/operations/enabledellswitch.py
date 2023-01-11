import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class EnableDellSwitchPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnableDellSwitchSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class EnableDellSwitchRequest:
    path_params: EnableDellSwitchPathParams = dataclasses.field()
    security: EnableDellSwitchSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EnableDellSwitchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
