import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import row as shared_row

class LoginFormFormTypeEnum(str, Enum):
    LOGIN = "login"
    QUESTION_AND_ANSWER = "questionAndAnswer"
    TOKEN = "token"
    IMAGE = "image"


@dataclass_json
@dataclasses.dataclass
class LoginForm:
    forget_password_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forgetPasswordURL') }})
    form_type: Optional[LoginFormFormTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formType') }})
    help: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('help') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    login_help: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loginHelp') }})
    mfa_info_text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mfaInfoText') }})
    mfa_info_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mfaInfoTitle') }})
    mfa_timeout: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mfaTimeout') }})
    row: Optional[list[shared_row.Row]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('row') }})
    
