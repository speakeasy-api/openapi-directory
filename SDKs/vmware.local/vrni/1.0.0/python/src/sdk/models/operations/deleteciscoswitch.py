import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteCiscoSwitchPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteCiscoSwitchSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DeleteCiscoSwitchRequest:
    path_params: DeleteCiscoSwitchPathParams = dataclasses.field()
    security: DeleteCiscoSwitchSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteCiscoSwitchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
