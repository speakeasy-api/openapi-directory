import dataclasses
from typing import Any,Optional
from ..shared import putpaymentmethodresponsetype as shared_putpaymentmethodresponsetype


@dataclasses.dataclass
class PutPaymentMethodsCreditCardPathParams:
    payment_method_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'payment-method-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutPaymentMethodsCreditCardHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutPaymentMethodsCreditCardRequest:
    headers: PutPaymentMethodsCreditCardHeaders = dataclasses.field()
    path_params: PutPaymentMethodsCreditCardPathParams = dataclasses.field()
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutPaymentMethodsCreditCardResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    put_payment_method_response_type: Optional[shared_putpaymentmethodresponsetype.PutPaymentMethodResponseType] = dataclasses.field(default=None)
    
