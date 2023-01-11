import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import saveaccount as shared_saveaccount


@dataclass_json
@dataclasses.dataclass
class SaveAccountWrapper:
    account: shared_saveaccount.SaveAccount = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    
