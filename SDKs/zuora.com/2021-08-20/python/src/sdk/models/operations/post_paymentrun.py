import dataclasses
from typing import Optional
from ..shared import postpaymentrunrequest as shared_postpaymentrunrequest
from ..shared import getpaymentruntype as shared_getpaymentruntype


@dataclasses.dataclass
class PostPaymentRunHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostPaymentRunRequest:
    headers: PostPaymentRunHeaders = dataclasses.field()
    request: shared_postpaymentrunrequest.PostPaymentRunRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostPaymentRunResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_payment_run_type: Optional[shared_getpaymentruntype.GetPaymentRunType] = dataclasses.field(default=None)
    
