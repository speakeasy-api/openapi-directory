import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DisableHpovManagerPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DisableHpovManagerSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DisableHpovManagerRequest:
    path_params: DisableHpovManagerPathParams = dataclasses.field()
    security: DisableHpovManagerSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DisableHpovManagerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
