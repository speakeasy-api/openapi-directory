import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import chargemetricsdata as shared_chargemetricsdata
from ..shared import actionamendcreditmemodata as shared_actionamendcreditmemodata
from ..shared import actionserrorresponse as shared_actionserrorresponse
from ..shared import actionamendinvoicedata as shared_actionamendinvoicedata


@dataclass_json
@dataclasses.dataclass
class AmendResult:
    amendment_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AmendmentIds') }})
    charge_metrics_data: Optional[shared_chargemetricsdata.ChargeMetricsData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChargeMetricsData') }})
    credit_memo_datas: Optional[list[shared_actionamendcreditmemodata.ActionAmendCreditMemoData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditMemoDatas') }})
    credit_memo_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditMemoId') }})
    errors: Optional[list[shared_actionserrorresponse.ActionsErrorResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Errors') }})
    gateway_response: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GatewayResponse') }})
    gateway_response_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GatewayResponseCode') }})
    invoice_datas: Optional[list[shared_actionamendinvoicedata.ActionAmendInvoiceData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InvoiceDatas') }})
    invoice_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InvoiceId') }})
    payment_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaymentId') }})
    payment_transaction_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaymentTransactionNumber') }})
    subscription_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubscriptionId') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Success') }})
    total_delta_mrr: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalDeltaMrr') }})
    total_delta_tcv: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalDeltaTcv') }})
    
