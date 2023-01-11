import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import account as shared_account


@dataclass_json
@dataclasses.dataclass
class AccountsResponseData:
    accounts: list[shared_account.Account] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accounts') }})
    server_knowledge: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server_knowledge') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountsResponse:
    data: AccountsResponseData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
