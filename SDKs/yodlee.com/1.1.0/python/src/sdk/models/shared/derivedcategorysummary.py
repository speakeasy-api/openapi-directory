import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import money as shared_money
from ..shared import derivedcategorysummarydetails as shared_derivedcategorysummarydetails
from ..shared import derivedtransactionslinks as shared_derivedtransactionslinks


@dataclass_json
@dataclasses.dataclass
class DerivedCategorySummary:
    category_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryId') }})
    category_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryName') }})
    credit_total: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditTotal') }})
    debit_total: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debitTotal') }})
    details: Optional[list[shared_derivedcategorysummarydetails.DerivedCategorySummaryDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    links: Optional[shared_derivedtransactionslinks.DerivedTransactionsLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    
