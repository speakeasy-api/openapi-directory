import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import banktransfercode as shared_banktransfercode
from ..shared import accountholder as shared_accountholder


@dataclass_json
@dataclasses.dataclass
class VerifiedAccount:
    account_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountNumber') }})
    account_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountType') }})
    bank_transfer_code: Optional[list[shared_banktransfercode.BankTransferCode]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bankTransferCode') }})
    full_account_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullAccountNumber') }})
    holder: Optional[list[shared_accountholder.AccountHolder]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('holder') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    provider_account_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('providerAccountId') }})
    provider_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('providerName') }})
    
