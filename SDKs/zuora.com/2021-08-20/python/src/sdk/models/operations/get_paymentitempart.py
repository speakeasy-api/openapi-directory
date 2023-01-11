import dataclasses
from typing import Optional
from ..shared import getpaymentitemparttype as shared_getpaymentitemparttype


@dataclasses.dataclass
class GetPaymentItemPartPathParams:
    itempartid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'itempartid', 'style': 'simple', 'explode': False }})
    partid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'partid', 'style': 'simple', 'explode': False }})
    payment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'paymentId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPaymentItemPartHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPaymentItemPartRequest:
    headers: GetPaymentItemPartHeaders = dataclasses.field()
    path_params: GetPaymentItemPartPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPaymentItemPartResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_payment_item_part_type: Optional[shared_getpaymentitemparttype.GetPaymentItemPartType] = dataclasses.field(default=None)
    
