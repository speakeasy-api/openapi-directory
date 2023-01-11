import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DisableHpvcManagerPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DisableHpvcManagerSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DisableHpvcManagerRequest:
    path_params: DisableHpvcManagerPathParams = dataclasses.field()
    security: DisableHpvcManagerSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DisableHpvcManagerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
