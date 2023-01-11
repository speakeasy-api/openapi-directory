import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteJuniperSwitchPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteJuniperSwitchSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DeleteJuniperSwitchRequest:
    path_params: DeleteJuniperSwitchPathParams = dataclasses.field()
    security: DeleteJuniperSwitchSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteJuniperSwitchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
