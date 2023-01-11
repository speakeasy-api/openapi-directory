import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetPaymentMethodPathParams:
    payment_method_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'payment-method-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPaymentMethodHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPaymentMethodRequest:
    headers: GetPaymentMethodHeaders = dataclasses.field()
    path_params: GetPaymentMethodPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPaymentMethodResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_payment_method_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
