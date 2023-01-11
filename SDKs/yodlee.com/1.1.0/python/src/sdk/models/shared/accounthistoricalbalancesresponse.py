import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accounthistory as shared_accounthistory


@dataclass_json
@dataclasses.dataclass
class AccountHistoricalBalancesResponse:
    account: Optional[list[shared_accounthistory.AccountHistory]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    
