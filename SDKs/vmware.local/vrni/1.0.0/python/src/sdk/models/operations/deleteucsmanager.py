import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteUcsManagerPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteUcsManagerSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DeleteUcsManagerRequest:
    path_params: DeleteUcsManagerPathParams = dataclasses.field()
    security: DeleteUcsManagerSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteUcsManagerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
