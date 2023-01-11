import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class WebinarPanelistDeletePathParams:
    panelist_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'panelistId', 'style': 'simple', 'explode': False }})
    webinar_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'webinarId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class WebinarPanelistDeleteSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class WebinarPanelistDeleteRequest:
    path_params: WebinarPanelistDeletePathParams = dataclasses.field()
    security: WebinarPanelistDeleteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class WebinarPanelistDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
