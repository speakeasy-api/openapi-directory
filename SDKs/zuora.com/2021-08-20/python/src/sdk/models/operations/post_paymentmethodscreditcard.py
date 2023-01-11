import dataclasses
from typing import Any,Optional
from ..shared import postpaymentmethodresponsetype as shared_postpaymentmethodresponsetype


@dataclasses.dataclass
class PostPaymentMethodsCreditCardHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostPaymentMethodsCreditCardRequest:
    headers: PostPaymentMethodsCreditCardHeaders = dataclasses.field()
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostPaymentMethodsCreditCardResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    post_payment_method_response_type: Optional[shared_postpaymentmethodresponsetype.PostPaymentMethodResponseType] = dataclasses.field(default=None)
    
