import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DisableNsxvManagerPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DisableNsxvManagerSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DisableNsxvManagerRequest:
    path_params: DisableNsxvManagerPathParams = dataclasses.field()
    security: DisableNsxvManagerSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DisableNsxvManagerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
