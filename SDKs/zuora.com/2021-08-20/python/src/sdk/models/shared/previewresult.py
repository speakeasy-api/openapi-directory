import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import chargepreviewmetrics as shared_chargepreviewmetrics
from ..shared import invoiceitempreviewresult as shared_invoiceitempreviewresult
from ..shared import orderdeltamrr as shared_orderdeltamrr
from ..shared import orderdeltatcb as shared_orderdeltatcb
from ..shared import orderdeltatcv as shared_orderdeltatcv
from ..shared import orderitem as shared_orderitem
from ..shared import ordermetric as shared_ordermetric
from ..shared import orderrampmetrics as shared_orderrampmetrics


@dataclass_json
@dataclasses.dataclass
class PreviewResultChargeMetrics:
    charges: Optional[list[shared_chargepreviewmetrics.ChargePreviewMetrics]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('charges') }})
    subscription_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionNumber') }})
    

@dataclass_json
@dataclasses.dataclass
class PreviewResultCreditMemos:
    amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    amount_without_tax: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amountWithoutTax') }})
    credit_memo_items: Optional[list[shared_invoiceitempreviewresult.InvoiceItemPreviewResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditMemoItems') }})
    target_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tax_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxAmount') }})
    

@dataclass_json
@dataclasses.dataclass
class PreviewResultInvoices:
    amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    amount_without_tax: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amountWithoutTax') }})
    invoice_items: Optional[list[shared_invoiceitempreviewresult.InvoiceItemPreviewResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoiceItems') }})
    target_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tax_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxAmount') }})
    

@dataclass_json
@dataclasses.dataclass
class PreviewResultOrderDeltaMetrics:
    r"""PreviewResultOrderDeltaMetrics
    **Note:** As of Zuora Billing Release 306, Zuora has upgraded the methodologies for calculating metrics in [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders). The new methodologies are reflected in the following Order Delta Metrics objects. 
    * [Order Delta Mrr](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Delta_Metrics/Order_Delta_Mrr)
    * [Order Delta Tcv](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Delta_Metrics/Order_Delta_Tcv)
    * [Order Delta Tcb](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Delta_Metrics/Order_Delta_Tcb)
    
    It is recommended that all customers use the new [Order Delta Metrics](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Delta_Metrics/AA_Overview_of_Order_Delta_Metrics). If you are an existing [Order Metrics](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders/Key_Metrics_for_Orders) customer and want to migrate to Order Delta Metrics, submit a request at [Zuora Global Support](https://support.zuora.com/).
    
    """
    
    order_delta_mrr: Optional[list[shared_orderdeltamrr.OrderDeltaMrr]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderDeltaMrr') }})
    order_delta_tcb: Optional[list[shared_orderdeltatcb.OrderDeltaTcb]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderDeltaTcb') }})
    order_delta_tcv: Optional[list[shared_orderdeltatcv.OrderDeltaTcv]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderDeltaTcv') }})
    

@dataclass_json
@dataclasses.dataclass
class PreviewResultOrderMetricsOrderActions:
    order_items: Optional[list[shared_orderitem.OrderItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderItems') }})
    order_metrics: Optional[list[shared_ordermetric.OrderMetric]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderMetrics') }})
    sequence: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sequence') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class PreviewResultOrderMetrics:
    order_actions: Optional[list[PreviewResultOrderMetricsOrderActions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderActions') }})
    subscription_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionNumber') }})
    

@dataclass_json
@dataclasses.dataclass
class PreviewResult:
    r"""PreviewResult
    The result of each type of preview. Returned only when the current request is preview call.
    """
    
    charge_metrics: Optional[list[PreviewResultChargeMetrics]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargeMetrics') }})
    credit_memos: Optional[list[PreviewResultCreditMemos]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditMemos') }})
    invoices: Optional[list[PreviewResultInvoices]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoices') }})
    order_delta_metrics: Optional[PreviewResultOrderDeltaMetrics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderDeltaMetrics') }})
    order_metrics: Optional[list[PreviewResultOrderMetrics]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderMetrics') }})
    ramp_metrics: Optional[list[shared_orderrampmetrics.OrderRampMetrics]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rampMetrics') }})
    
