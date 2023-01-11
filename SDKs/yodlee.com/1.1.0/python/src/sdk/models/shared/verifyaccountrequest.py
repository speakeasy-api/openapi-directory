import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import verifytransactioncriteria as shared_verifytransactioncriteria

class VerifyAccountRequestContainerEnum(str, Enum):
    BANK = "bank"
    CREDIT_CARD = "creditCard"
    INVESTMENT = "investment"
    INSURANCE = "insurance"
    LOAN = "loan"
    REWARD = "reward"
    REAL_ESTATE = "realEstate"
    OTHER_ASSETS = "otherAssets"
    OTHER_LIABILITIES = "otherLiabilities"


@dataclass_json
@dataclasses.dataclass
class VerifyAccountRequestInput:
    transaction_criteria: list[shared_verifytransactioncriteria.VerifyTransactionCriteriaInput] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionCriteria') }})
    account_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    container: Optional[VerifyAccountRequestContainerEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('container') }})
    
