import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteVcenterPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteVcenterSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DeleteVcenterRequest:
    path_params: DeleteVcenterPathParams = dataclasses.field()
    security: DeleteVcenterSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteVcenterResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
