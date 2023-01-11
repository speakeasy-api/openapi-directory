import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class EnableVcenterPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnableVcenterSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class EnableVcenterRequest:
    path_params: EnableVcenterPathParams = dataclasses.field()
    security: EnableVcenterSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EnableVcenterResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
