import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class UserSchedulerDeletePathParams:
    scheduler_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'schedulerId', 'style': 'simple', 'explode': False }})
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UserSchedulerDeleteSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UserSchedulerDeleteRequest:
    path_params: UserSchedulerDeletePathParams = dataclasses.field()
    security: UserSchedulerDeleteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UserSchedulerDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
