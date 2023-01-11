import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import useraccesstoken as shared_useraccesstoken


@dataclass_json
@dataclasses.dataclass
class UserAccessTokensResponse:
    user: Optional[shared_useraccesstoken.UserAccessToken] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
