import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import description as shared_description

class UpdateTransactionCategorySourceEnum(str, Enum):
    SYSTEM = "SYSTEM"
    USER = "USER"

class UpdateTransactionContainerEnum(str, Enum):
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
class UpdateTransactionInput:
    category_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryId') }})
    category_source: UpdateTransactionCategorySourceEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('categorySource') }})
    container: UpdateTransactionContainerEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('container') }})
    description: Optional[shared_description.DescriptionInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    memo: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memo') }})
    
