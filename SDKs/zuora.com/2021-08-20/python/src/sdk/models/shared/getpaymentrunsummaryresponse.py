import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import getpaymentrunsummarytotalvalues as shared_getpaymentrunsummarytotalvalues


@dataclass_json
@dataclasses.dataclass
class GetPaymentRunSummaryResponse:
    number_of_credit_balance_adjustments: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfCreditBalanceAdjustments') }})
    number_of_credit_memos: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfCreditMemos') }})
    number_of_debit_memos: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfDebitMemos') }})
    number_of_error_input_data: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfErrorInputData') }})
    number_of_errors: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfErrors') }})
    number_of_input_data: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfInputData') }})
    number_of_invoices: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfInvoices') }})
    number_of_payments: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfPayments') }})
    number_of_processed_input_data: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfProcessedInputData') }})
    number_of_receivables: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfReceivables') }})
    number_of_unapplied_payments: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfUnappliedPayments') }})
    number_of_unprocessed_debit_memos: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfUnprocessedDebitMemos') }})
    number_of_unprocessed_invoices: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfUnprocessedInvoices') }})
    number_of_unprocessed_receivables: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfUnprocessedReceivables') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    total_values: Optional[list[shared_getpaymentrunsummarytotalvalues.GetPaymentRunSummaryTotalValues]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalValues') }})
    
