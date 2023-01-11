import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import error as shared_error


@dataclasses.dataclass
class FollowUsersPathParams:
    user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class FollowUsersRequestBody:
    users: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    

@dataclasses.dataclass
class FollowUsersSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FollowUsersRequest:
    path_params: FollowUsersPathParams = dataclasses.field()
    request: FollowUsersRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: FollowUsersSecurity = dataclasses.field()
    

@dataclasses.dataclass
class FollowUsersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
