import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import api_app as shared_api_app
from ..shared import user as shared_user

class AuthTokenTypeEnum(str, Enum):
    BEARER = "bearer"


@dataclass_json
@dataclasses.dataclass
class Auth:
    access_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_token') }})
    app: shared_api_app.APIApp = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('app') }})
    scope: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    token_type: AuthTokenTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token_type') }})
    expires_on: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_on') }})
    refresh_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refresh_token') }})
    user: Optional[shared_user.User] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
