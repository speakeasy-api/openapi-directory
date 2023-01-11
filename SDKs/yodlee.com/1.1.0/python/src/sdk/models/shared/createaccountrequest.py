import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import createaccountinfo as shared_createaccountinfo


@dataclass_json
@dataclasses.dataclass
class CreateAccountRequest:
    account: shared_createaccountinfo.CreateAccountInfo = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    
