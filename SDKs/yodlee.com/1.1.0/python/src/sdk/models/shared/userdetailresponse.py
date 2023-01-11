import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import userdetail as shared_userdetail


@dataclass_json
@dataclasses.dataclass
class UserDetailResponse:
    user: Optional[shared_userdetail.UserDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
