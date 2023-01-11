import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class WebinarPollDeletePathParams:
    poll_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'pollId', 'style': 'simple', 'explode': False }})
    webinar_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'webinarId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class WebinarPollDeleteSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class WebinarPollDeleteRequest:
    path_params: WebinarPollDeletePathParams = dataclasses.field()
    security: WebinarPollDeleteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class WebinarPollDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
