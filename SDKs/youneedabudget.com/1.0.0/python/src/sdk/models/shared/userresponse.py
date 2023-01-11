import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import user as shared_user


@dataclass_json
@dataclasses.dataclass
class UserResponseData:
    user: shared_user.User = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    

@dataclass_json
@dataclasses.dataclass
class UserResponse:
    data: UserResponseData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
