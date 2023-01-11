import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import account as shared_account


@dataclass_json
@dataclasses.dataclass
class AccountResponseData:
    account: shared_account.Account = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountResponse:
    data: AccountResponseData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
