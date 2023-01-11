import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class EnableHpvcManagerPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnableHpvcManagerSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class EnableHpvcManagerRequest:
    path_params: EnableHpvcManagerPathParams = dataclasses.field()
    security: EnableHpvcManagerSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EnableHpvcManagerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
