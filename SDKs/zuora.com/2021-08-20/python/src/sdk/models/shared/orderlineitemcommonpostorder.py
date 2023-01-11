import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ordercontact as shared_ordercontact

class OrderLineItemCommonPostOrderItemStateEnum(str, Enum):
    EXECUTING = "Executing"
    SENT_TO_BILLING = "SentToBilling"
    COMPLETE = "Complete"
    CANCELLED = "Cancelled"

class OrderLineItemCommonPostOrderItemTypeEnum(str, Enum):
    PRODUCT = "Product"
    FEE = "Fee"
    SERVICES = "Services"

class OrderLineItemCommonPostOrderTaxModeEnum(str, Enum):
    TAX_INCLUSIVE = "TaxInclusive"
    TAX_EXCLUSIVE = "TaxExclusive"


@dataclass_json
@dataclasses.dataclass
class OrderLineItemCommonPostOrder:
    uom: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UOM') }})
    amount_per_unit: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amountPerUnit') }})
    bill_target_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billTargetDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_fields: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFields') }})
    deferred_revenue_accounting_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deferredRevenueAccountingCode') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    item_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemName') }})
    item_state: Optional[OrderLineItemCommonPostOrderItemStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemState') }})
    item_type: Optional[OrderLineItemCommonPostOrderItemTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemType') }})
    list_price_per_unit: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listPricePerUnit') }})
    product_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productCode') }})
    product_rate_plan_charge_id: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productRatePlanChargeId'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    purchase_order_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchaseOrderNumber') }})
    quantity: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    recognized_revenue_accounting_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recognizedRevenueAccountingCode') }})
    revenue_recognition_rule: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revenueRecognitionRule') }})
    sold_to: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('soldTo') }})
    sold_to_data: Optional[shared_ordercontact.OrderContact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('soldToData') }})
    tax_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxCode') }})
    tax_mode: Optional[OrderLineItemCommonPostOrderTaxModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxMode') }})
    transaction_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
