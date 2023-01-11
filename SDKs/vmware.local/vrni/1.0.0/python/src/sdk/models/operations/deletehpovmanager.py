import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteHpovManagerPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteHpovManagerSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DeleteHpovManagerRequest:
    path_params: DeleteHpovManagerPathParams = dataclasses.field()
    security: DeleteHpovManagerSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteHpovManagerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
