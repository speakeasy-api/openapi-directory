import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class EnableHpovManagerPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnableHpovManagerSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class EnableHpovManagerRequest:
    path_params: EnableHpovManagerPathParams = dataclasses.field()
    security: EnableHpovManagerSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EnableHpovManagerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
