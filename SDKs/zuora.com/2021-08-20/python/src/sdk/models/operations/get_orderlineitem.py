import dataclasses
from typing import Optional
from ..shared import getorderlineitemresponsetype as shared_getorderlineitemresponsetype


@dataclasses.dataclass
class GetOrderLineItemPathParams:
    item_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrderLineItemHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrderLineItemRequest:
    headers: GetOrderLineItemHeaders = dataclasses.field()
    path_params: GetOrderLineItemPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrderLineItemResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_order_line_item_response_type: Optional[shared_getorderlineitemresponsetype.GetOrderLineItemResponseType] = dataclasses.field(default=None)
    
