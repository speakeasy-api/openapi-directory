import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class EnableNsxvManagerPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnableNsxvManagerSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class EnableNsxvManagerRequest:
    path_params: EnableNsxvManagerPathParams = dataclasses.field()
    security: EnableNsxvManagerSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EnableNsxvManagerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
