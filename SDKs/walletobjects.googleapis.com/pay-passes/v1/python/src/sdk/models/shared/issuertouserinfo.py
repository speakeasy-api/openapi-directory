import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import signupinfo as shared_signupinfo

class IssuerToUserInfoActionEnum(str, Enum):
    ACTION_UNSPECIFIED = "ACTION_UNSPECIFIED"
    S2_AP = "S2AP"
    S2AP = "s2ap"
    SIGN_UP_UPPER = "SIGN_UP"
    SIGN_UP_MIXED = "signUp"


@dataclass_json
@dataclasses.dataclass
class IssuerToUserInfo:
    action: Optional[IssuerToUserInfoActionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    sign_up_info: Optional[shared_signupinfo.SignUpInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signUpInfo') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
