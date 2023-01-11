import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ProxyGetPaymentTransactionLogGatewayStateEnum(str, Enum):
    MARKED_FOR_SUBMISSION = "MarkedForSubmission"
    SUBMITTED = "Submitted"
    SETTLED = "Settled"
    NOT_SUBMITTED = "NotSubmitted"
    FAILED_TO_SETTLE = "FailedToSettle"

class ProxyGetPaymentTransactionLogGatewayTransactionTypeEnum(str, Enum):
    AUTHORIZATION = "Authorization"
    SALE = "Sale"
    VOID = "Void"
    INQUIRY = "Inquiry"
    VOID_AUTH = "VoidAuth"


@dataclass_json
@dataclasses.dataclass
class ProxyGetPaymentTransactionLog:
    avs_response_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AVSResponseCode') }})
    batch_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BatchId') }})
    cvv_response_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CVVResponseCode') }})
    gateway: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Gateway') }})
    gateway_reason_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GatewayReasonCode') }})
    gateway_reason_code_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GatewayReasonCodeDescription') }})
    gateway_state: Optional[ProxyGetPaymentTransactionLogGatewayStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GatewayState') }})
    gateway_transaction_type: Optional[ProxyGetPaymentTransactionLogGatewayTransactionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GatewayTransactionType') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    payment_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaymentId') }})
    request_string: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestString') }})
    response_string: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResponseString') }})
    transaction_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransactionDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    transaction_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransactionId') }})
    
