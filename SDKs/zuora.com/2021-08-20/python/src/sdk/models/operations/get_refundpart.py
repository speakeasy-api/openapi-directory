import dataclasses
from typing import Optional
from ..shared import refundpartresponsetype as shared_refundpartresponsetype


@dataclasses.dataclass
class GetRefundPartPathParams:
    refund_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'refundId', 'style': 'simple', 'explode': False }})
    refundpartid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'refundpartid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRefundPartHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRefundPartRequest:
    headers: GetRefundPartHeaders = dataclasses.field()
    path_params: GetRefundPartPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRefundPartResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    refund_part_response_type: Optional[shared_refundpartresponsetype.RefundPartResponseType] = dataclasses.field(default=None)
    
