import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import verifiedaccount as shared_verifiedaccount
from ..shared import verifytransactioncriteria as shared_verifytransactioncriteria


@dataclass_json
@dataclasses.dataclass
class VerifyAccount:
    account: Optional[list[shared_verifiedaccount.VerifiedAccount]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    transaction_criteria: Optional[list[shared_verifytransactioncriteria.VerifyTransactionCriteria]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionCriteria') }})
    
