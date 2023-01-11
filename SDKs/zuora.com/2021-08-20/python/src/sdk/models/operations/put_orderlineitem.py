import dataclasses
from typing import Optional
from ..shared import orderlineitemcommon as shared_orderlineitemcommon
from ..shared import putorderlineitemresponsetype as shared_putorderlineitemresponsetype


@dataclasses.dataclass
class PutOrderLineItemPathParams:
    item_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutOrderLineItemHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutOrderLineItemRequest:
    headers: PutOrderLineItemHeaders = dataclasses.field()
    path_params: PutOrderLineItemPathParams = dataclasses.field()
    request: shared_orderlineitemcommon.OrderLineItemCommon = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutOrderLineItemResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    put_order_line_item_response_type: Optional[shared_putorderlineitemresponsetype.PutOrderLineItemResponseType] = dataclasses.field(default=None)
    
