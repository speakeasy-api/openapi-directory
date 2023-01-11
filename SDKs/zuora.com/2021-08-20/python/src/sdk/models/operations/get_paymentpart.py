import dataclasses
from typing import Optional
from ..shared import getpaymentparttype as shared_getpaymentparttype


@dataclasses.dataclass
class GetPaymentPartPathParams:
    partid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'partid', 'style': 'simple', 'explode': False }})
    payment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'paymentId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPaymentPartHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPaymentPartRequest:
    headers: GetPaymentPartHeaders = dataclasses.field()
    path_params: GetPaymentPartPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPaymentPartResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_payment_part_type: Optional[shared_getpaymentparttype.GetPaymentPartType] = dataclasses.field(default=None)
    
