import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import userregistration as shared_userregistration


@dataclass_json
@dataclasses.dataclass
class UserRequest:
    user: shared_userregistration.UserRegistration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
