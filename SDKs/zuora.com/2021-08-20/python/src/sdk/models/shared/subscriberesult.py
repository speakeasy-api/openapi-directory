import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import newchargemetrics as shared_newchargemetrics
from ..shared import actionsubscribecreditmemodata as shared_actionsubscribecreditmemodata
from ..shared import actionserrorresponse as shared_actionserrorresponse
from ..shared import actionsubscribeinvoicedata as shared_actionsubscribeinvoicedata


@dataclass_json
@dataclasses.dataclass
class SubscribeResultChargeMetricsData:
    charge_metrics: Optional[list[shared_newchargemetrics.NewChargeMetrics]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChargeMetrics') }})
    

@dataclass_json
@dataclasses.dataclass
class SubscribeResultCreditMemoResultCreditMemo:
    credit_memo_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditMemoNumber') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    

@dataclass_json
@dataclasses.dataclass
class SubscribeResultCreditMemoResult:
    r"""SubscribeResultCreditMemoResult
    The result of the credit memo.
    
    **Note**: This field is only available if you have the Invoice Settlement feature enabled and set the `X-Zuora-WSDL-Version` request header to `107` or later.
    
    """
    
    credit_memo: Optional[list[SubscribeResultCreditMemoResultCreditMemo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditMemo') }})
    

@dataclass_json
@dataclasses.dataclass
class SubscribeResultInvoiceResultInvoice:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    invoice_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InvoiceNumber') }})
    

@dataclass_json
@dataclasses.dataclass
class SubscribeResultInvoiceResult:
    invoice: Optional[list[SubscribeResultInvoiceResultInvoice]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Invoice') }})
    

@dataclass_json
@dataclasses.dataclass
class SubscribeResult:
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    account_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountNumber') }})
    charge_metrics_data: Optional[SubscribeResultChargeMetricsData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChargeMetricsData') }})
    credit_memo_data: Optional[list[shared_actionsubscribecreditmemodata.ActionSubscribeCreditMemoData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditMemoData') }})
    credit_memo_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditMemoId') }})
    credit_memo_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditMemoNumber') }})
    credit_memo_result: Optional[SubscribeResultCreditMemoResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditMemoResult') }})
    errors: Optional[list[shared_actionserrorresponse.ActionsErrorResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Errors') }})
    gateway_response: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GatewayResponse') }})
    gateway_response_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GatewayResponseCode') }})
    invoice_data: Optional[list[shared_actionsubscribeinvoicedata.ActionSubscribeInvoiceData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InvoiceData') }})
    invoice_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InvoiceId') }})
    invoice_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InvoiceNumber') }})
    invoice_result: Optional[SubscribeResultInvoiceResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InvoiceResult') }})
    payment_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaymentId') }})
    payment_transaction_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaymentTransactionNumber') }})
    subscription_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubscriptionId') }})
    subscription_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubscriptionNumber') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Success') }})
    total_mrr: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalMrr') }})
    total_tcv: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalTcv') }})
    
