import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteHpvcManagerPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteHpvcManagerSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DeleteHpvcManagerRequest:
    path_params: DeleteHpvcManagerPathParams = dataclasses.field()
    security: DeleteHpvcManagerSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteHpvcManagerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
