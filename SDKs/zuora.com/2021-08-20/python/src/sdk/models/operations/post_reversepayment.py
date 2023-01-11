import dataclasses
from typing import Optional
from ..shared import postreversepaymentrequest as shared_postreversepaymentrequest
from ..shared import postreversepaymentresponse as shared_postreversepaymentresponse


@dataclasses.dataclass
class PostReversePaymentPathParams:
    payment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'payment-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostReversePaymentHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostReversePaymentRequest:
    headers: PostReversePaymentHeaders = dataclasses.field()
    path_params: PostReversePaymentPathParams = dataclasses.field()
    request: shared_postreversepaymentrequest.PostReversePaymentRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostReversePaymentResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    post_reverse_payment_response: Optional[shared_postreversepaymentresponse.PostReversePaymentResponse] = dataclasses.field(default=None)
    
