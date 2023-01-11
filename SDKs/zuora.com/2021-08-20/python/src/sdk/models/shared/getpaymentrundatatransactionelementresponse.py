import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetPaymentRunDataTransactionElementResponseStatusEnum(str, Enum):
    PROCESSED = "Processed"
    PROCESSING = "Processing"
    ERROR = "Error"

class GetPaymentRunDataTransactionElementResponseTypeEnum(str, Enum):
    PAYMENT = "Payment"
    CREDIT_MEMO = "CreditMemo"
    UNAPPLIED_PAYMENT = "UnappliedPayment"
    CREDIT_BALANCE_ADJUSTMENT = "CreditBalanceAdjustment"


@dataclass_json
@dataclasses.dataclass
class GetPaymentRunDataTransactionElementResponse:
    amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    applied_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedAmount') }})
    error_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorCode') }})
    error_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    status: Optional[GetPaymentRunDataTransactionElementResponseStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    type: Optional[GetPaymentRunDataTransactionElementResponseTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
