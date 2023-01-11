import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteNsxvManagerPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteNsxvManagerSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DeleteNsxvManagerRequest:
    path_params: DeleteNsxvManagerPathParams = dataclasses.field()
    security: DeleteNsxvManagerSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteNsxvManagerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
