import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import derivedtransactionslinks as shared_derivedtransactionslinks
from ..shared import derivedtransactionssummary as shared_derivedtransactionssummary


@dataclass_json
@dataclasses.dataclass
class DerivedTransactionSummaryResponse:
    links: Optional[shared_derivedtransactionslinks.DerivedTransactionsLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    transaction_summary: Optional[list[shared_derivedtransactionssummary.DerivedTransactionsSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionSummary') }})
    
