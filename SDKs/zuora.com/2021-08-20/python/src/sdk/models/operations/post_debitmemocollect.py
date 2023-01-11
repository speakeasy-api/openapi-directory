import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import debitmemocollectrequest as shared_debitmemocollectrequest


@dataclasses.dataclass
class PostDebitMemoCollectPathParams:
    debit_memo_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'debitMemoId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostDebitMemoCollectHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PostDebitMemoCollect200ApplicationJSONAppliedCreditMemos:
    applied_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedAmount') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    unapplied_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unappliedAmount') }})
    

@dataclass_json
@dataclasses.dataclass
class PostDebitMemoCollect200ApplicationJSONAppliedPayments:
    applied_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedAmount') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    unapplied_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unappliedAmount') }})
    

@dataclass_json
@dataclasses.dataclass
class PostDebitMemoCollect200ApplicationJSONDebitMemo:
    r"""PostDebitMemoCollect200ApplicationJSONDebitMemo
    The information about the debit memo that just collected.
    
    """
    
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    
class PostDebitMemoCollect200ApplicationJSONProcessedPaymentStatusEnum(str, Enum):
    PROCESSING = "Processing"
    PROCESSED = "Processed"
    ERROR = "Error"
    CANCELED = "Canceled"


@dataclass_json
@dataclasses.dataclass
class PostDebitMemoCollect200ApplicationJSONProcessedPayment:
    r"""PostDebitMemoCollect200ApplicationJSONProcessedPayment
    The information about the payment that newly processed to the debit memo.
    
    """
    
    amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    gateway_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatewayId') }})
    gateway_response: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatewayResponse') }})
    gateway_response_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatewayResponseCode') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    payment_method_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentMethodId') }})
    status: Optional[PostDebitMemoCollect200ApplicationJSONProcessedPaymentStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class PostDebitMemoCollect200ApplicationJSON:
    applied_credit_memos: Optional[list[PostDebitMemoCollect200ApplicationJSONAppliedCreditMemos]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedCreditMemos') }})
    applied_payments: Optional[list[PostDebitMemoCollect200ApplicationJSONAppliedPayments]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedPayments') }})
    debit_memo: Optional[PostDebitMemoCollect200ApplicationJSONDebitMemo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debitMemo') }})
    processed_payment: Optional[PostDebitMemoCollect200ApplicationJSONProcessedPayment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processedPayment') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    

@dataclasses.dataclass
class PostDebitMemoCollectRequest:
    headers: PostDebitMemoCollectHeaders = dataclasses.field()
    path_params: PostDebitMemoCollectPathParams = dataclasses.field()
    request: shared_debitmemocollectrequest.DebitMemoCollectRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostDebitMemoCollectResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    post_debit_memo_collect_200_application_json_object: Optional[PostDebitMemoCollect200ApplicationJSON] = dataclasses.field(default=None)
    
