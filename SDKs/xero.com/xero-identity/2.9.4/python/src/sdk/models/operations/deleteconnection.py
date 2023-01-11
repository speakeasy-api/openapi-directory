import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteConnectionPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteConnectionSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteConnectionRequest:
    path_params: DeleteConnectionPathParams = dataclasses.field()
    security: DeleteConnectionSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteConnectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
