import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class EnableUcsManagerPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnableUcsManagerSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class EnableUcsManagerRequest:
    path_params: EnableUcsManagerPathParams = dataclasses.field()
    security: EnableUcsManagerSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EnableUcsManagerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
