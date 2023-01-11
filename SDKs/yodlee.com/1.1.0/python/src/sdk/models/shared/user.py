import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import name as shared_name
from ..shared import userresponsepreferences as shared_userresponsepreferences
from ..shared import usersession as shared_usersession

class UserRoleTypeEnum(str, Enum):
    INDIVIDUAL = "INDIVIDUAL"


@dataclass_json
@dataclasses.dataclass
class User:
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    login_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loginName') }})
    name: Optional[shared_name.Name] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    preferences: Optional[shared_userresponsepreferences.UserResponsePreferences] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferences') }})
    role_type: Optional[UserRoleTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleType') }})
    session: Optional[shared_usersession.UserSession] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('session') }})
    
