import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DisableUcsManagerPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DisableUcsManagerSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DisableUcsManagerRequest:
    path_params: DisableUcsManagerPathParams = dataclasses.field()
    security: DisableUcsManagerSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DisableUcsManagerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
