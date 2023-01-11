import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import transaction as shared_transaction

class VerifyTransactionCriteriaBaseTypeEnum(str, Enum):
    CREDIT = "CREDIT"
    DEBIT = "DEBIT"

class VerifyTransactionCriteriaMatchedEnum(str, Enum):
    COMPLETE = "COMPLETE"
    NONE = "NONE"


@dataclass_json
@dataclasses.dataclass
class VerifyTransactionCriteriaInput:
    amount: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    date_: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    base_type: Optional[VerifyTransactionCriteriaBaseTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseType') }})
    date_variance: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateVariance') }})
    keyword: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyword') }})
    

@dataclass_json
@dataclasses.dataclass
class VerifyTransactionCriteria:
    amount: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    date_: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    base_type: Optional[VerifyTransactionCriteriaBaseTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseType') }})
    date_variance: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateVariance') }})
    keyword: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyword') }})
    matched: Optional[VerifyTransactionCriteriaMatchedEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matched') }})
    verified_transaction: Optional[list[shared_transaction.Transaction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verifiedTransaction') }})
    
