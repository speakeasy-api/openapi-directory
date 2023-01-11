import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DisableVcenterPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DisableVcenterSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DisableVcenterRequest:
    path_params: DisableVcenterPathParams = dataclasses.field()
    security: DisableVcenterSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DisableVcenterResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
