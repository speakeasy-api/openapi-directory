import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import verificationbanktransfercode as shared_verificationbanktransfercode

class VerificationAccountAccountTypeEnum(str, Enum):
    SAVINGS = "SAVINGS"
    CHECKING = "CHECKING"


@dataclass_json
@dataclasses.dataclass
class VerificationAccount:
    account_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountNumber') }})
    account_type: VerificationAccountAccountTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountType') }})
    bank_transfer_code: shared_verificationbanktransfercode.VerificationBankTransferCode = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bankTransferCode') }})
    account_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountName') }})
    
