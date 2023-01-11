import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import derivedcategorysummary as shared_derivedcategorysummary
from ..shared import money as shared_money
from ..shared import derivedtransactionslinks as shared_derivedtransactionslinks

class DerivedTransactionsSummaryCategoryTypeEnum(str, Enum):
    TRANSFER = "TRANSFER"
    DEFERRED_COMPENSATION = "DEFERRED_COMPENSATION"
    UNCATEGORIZE = "UNCATEGORIZE"
    INCOME = "INCOME"
    EXPENSE = "EXPENSE"


@dataclass_json
@dataclasses.dataclass
class DerivedTransactionsSummary:
    category_summary: Optional[list[shared_derivedcategorysummary.DerivedCategorySummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categorySummary') }})
    category_type: Optional[DerivedTransactionsSummaryCategoryTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryType') }})
    credit_total: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditTotal') }})
    debit_total: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debitTotal') }})
    links: Optional[shared_derivedtransactionslinks.DerivedTransactionsLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    
