import dataclasses
from typing import Optional
from ..shared import putpaymentrunrequest as shared_putpaymentrunrequest
from ..shared import getpaymentruntype as shared_getpaymentruntype


@dataclasses.dataclass
class PutPaymentRunPathParams:
    payment_run_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'paymentRunId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutPaymentRunHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutPaymentRunRequest:
    headers: PutPaymentRunHeaders = dataclasses.field()
    path_params: PutPaymentRunPathParams = dataclasses.field()
    request: shared_putpaymentrunrequest.PutPaymentRunRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutPaymentRunResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_payment_run_type: Optional[shared_getpaymentruntype.GetPaymentRunType] = dataclasses.field(default=None)
    
