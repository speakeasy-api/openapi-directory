import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetPaymentRunSummaryTotalValues:
    total_value_of_credit_balance: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalValueOfCreditBalance') }})
    total_value_of_credit_memos: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalValueOfCreditMemos') }})
    total_value_of_debit_memos: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalValueOfDebitMemos') }})
    total_value_of_errors: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalValueOfErrors') }})
    total_value_of_invoices: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalValueOfInvoices') }})
    total_value_of_payments: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalValueOfPayments') }})
    total_value_of_receivables: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalValueOfReceivables') }})
    total_value_of_unapplied_payments: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalValueOfUnappliedPayments') }})
    total_value_of_unprocessed_debit_memos: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalValueOfUnprocessedDebitMemos') }})
    total_value_of_unprocessed_invoices: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalValueOfUnprocessedInvoices') }})
    total_value_of_unprocessed_receivables: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalValueOfUnprocessedReceivables') }})
    
