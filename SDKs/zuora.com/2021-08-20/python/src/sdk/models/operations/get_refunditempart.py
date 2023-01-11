import dataclasses
from typing import Optional
from ..shared import getrefunditemparttype as shared_getrefunditemparttype


@dataclasses.dataclass
class GetRefundItemPartPathParams:
    itempartid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'itempartid', 'style': 'simple', 'explode': False }})
    refund_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'refundId', 'style': 'simple', 'explode': False }})
    refundpartid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'refundpartid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRefundItemPartHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRefundItemPartRequest:
    headers: GetRefundItemPartHeaders = dataclasses.field()
    path_params: GetRefundItemPartPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRefundItemPartResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_refund_item_part_type: Optional[shared_getrefunditemparttype.GetRefundItemPartType] = dataclasses.field(default=None)
    
