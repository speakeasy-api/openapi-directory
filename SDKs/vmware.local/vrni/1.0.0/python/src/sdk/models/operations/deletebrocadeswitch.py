import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteBrocadeSwitchPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteBrocadeSwitchSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DeleteBrocadeSwitchRequest:
    path_params: DeleteBrocadeSwitchPathParams = dataclasses.field()
    security: DeleteBrocadeSwitchSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteBrocadeSwitchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
