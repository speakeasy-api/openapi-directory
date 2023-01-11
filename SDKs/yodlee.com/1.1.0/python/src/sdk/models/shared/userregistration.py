import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import useraddress as shared_useraddress
from ..shared import name as shared_name
from ..shared import userrequestpreferences as shared_userrequestpreferences


@dataclass_json
@dataclasses.dataclass
class UserRegistration:
    login_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('loginName') }})
    address: Optional[shared_useraddress.UserAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    name: Optional[shared_name.Name] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    preferences: Optional[shared_userrequestpreferences.UserRequestPreferences] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferences') }})
    segment_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segmentName') }})
    
