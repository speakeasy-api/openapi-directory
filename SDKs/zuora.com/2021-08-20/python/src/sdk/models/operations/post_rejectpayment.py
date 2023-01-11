import dataclasses
from typing import Optional
from ..shared import postrejectpaymentrequest as shared_postrejectpaymentrequest
from ..shared import postrejectpaymentresponse as shared_postrejectpaymentresponse


@dataclasses.dataclass
class PostRejectPaymentPathParams:
    payment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'payment-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostRejectPaymentHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostRejectPaymentRequest:
    headers: PostRejectPaymentHeaders = dataclasses.field()
    path_params: PostRejectPaymentPathParams = dataclasses.field()
    request: shared_postrejectpaymentrequest.PostRejectPaymentRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostRejectPaymentResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    post_reject_payment_response: Optional[shared_postrejectpaymentresponse.PostRejectPaymentResponse] = dataclasses.field(default=None)
    
