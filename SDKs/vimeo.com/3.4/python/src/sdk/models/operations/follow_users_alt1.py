import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import error as shared_error


@dataclass_json
@dataclasses.dataclass
class FollowUsersAlt1RequestBody:
    users: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    

@dataclasses.dataclass
class FollowUsersAlt1Security:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FollowUsersAlt1Request:
    request: FollowUsersAlt1RequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: FollowUsersAlt1Security = dataclasses.field()
    

@dataclasses.dataclass
class FollowUsersAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
