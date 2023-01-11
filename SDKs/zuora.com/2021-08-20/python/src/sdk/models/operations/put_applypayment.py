import dataclasses
from typing import Any,Optional
from ..shared import applypaymenttype as shared_applypaymenttype


@dataclasses.dataclass
class PutApplyPaymentPathParams:
    payment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'paymentId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutApplyPaymentHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutApplyPaymentRequest:
    headers: PutApplyPaymentHeaders = dataclasses.field()
    path_params: PutApplyPaymentPathParams = dataclasses.field()
    request: shared_applypaymenttype.ApplyPaymentType = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutApplyPaymentResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    getar_payment_type: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
