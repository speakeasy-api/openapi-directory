import dataclasses
from typing import Optional
from ..shared import postsettlepaymentrequest as shared_postsettlepaymentrequest
from ..shared import postsettlepaymentresponse as shared_postsettlepaymentresponse


@dataclasses.dataclass
class PostSettlePaymentPathParams:
    payment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'payment-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostSettlePaymentHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostSettlePaymentRequest:
    headers: PostSettlePaymentHeaders = dataclasses.field()
    path_params: PostSettlePaymentPathParams = dataclasses.field()
    request: shared_postsettlepaymentrequest.PostSettlePaymentRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostSettlePaymentResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    post_settle_payment_response: Optional[shared_postsettlepaymentresponse.PostSettlePaymentResponse] = dataclasses.field(default=None)
    
