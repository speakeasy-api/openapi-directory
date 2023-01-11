import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteDellSwitchPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteDellSwitchSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DeleteDellSwitchRequest:
    path_params: DeleteDellSwitchPathParams = dataclasses.field()
    security: DeleteDellSwitchSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteDellSwitchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
