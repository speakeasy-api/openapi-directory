import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import useraddress as shared_useraddress
from ..shared import name as shared_name
from ..shared import userresponsepreferences as shared_userresponsepreferences

class UserDetailRoleTypeEnum(str, Enum):
    INDIVIDUAL = "INDIVIDUAL"


@dataclass_json
@dataclasses.dataclass
class UserDetail:
    address: Optional[shared_useraddress.UserAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    login_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loginName') }})
    name: Optional[shared_name.Name] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    preferences: Optional[shared_userresponsepreferences.UserResponsePreferences] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferences') }})
    role_type: Optional[UserDetailRoleTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleType') }})
    segment_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segmentName') }})
    
