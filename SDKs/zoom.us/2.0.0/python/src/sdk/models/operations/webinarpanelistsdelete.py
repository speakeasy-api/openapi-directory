import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class WebinarPanelistsDeletePathParams:
    webinar_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'webinarId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class WebinarPanelistsDeleteSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class WebinarPanelistsDeleteRequest:
    path_params: WebinarPanelistsDeletePathParams = dataclasses.field()
    security: WebinarPanelistsDeleteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class WebinarPanelistsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
