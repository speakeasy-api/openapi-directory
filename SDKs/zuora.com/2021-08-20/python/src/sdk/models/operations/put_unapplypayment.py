import dataclasses
from typing import Any,Optional
from ..shared import unapplypaymenttype as shared_unapplypaymenttype


@dataclasses.dataclass
class PutUnapplyPaymentPathParams:
    payment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'paymentId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutUnapplyPaymentHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutUnapplyPaymentRequest:
    headers: PutUnapplyPaymentHeaders = dataclasses.field()
    path_params: PutUnapplyPaymentPathParams = dataclasses.field()
    request: shared_unapplypaymenttype.UnapplyPaymentType = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutUnapplyPaymentResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    getar_payment_type: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
