import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteApplicationPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteApplicationSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DeleteApplicationRequest:
    path_params: DeleteApplicationPathParams = dataclasses.field()
    security: DeleteApplicationSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteApplicationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
