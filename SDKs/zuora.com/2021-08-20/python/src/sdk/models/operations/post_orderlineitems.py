import dataclasses
from typing import Optional
from ..shared import postorderlineitemsrequesttype as shared_postorderlineitemsrequesttype
from ..shared import getorderlineitemresponsetype as shared_getorderlineitemresponsetype


@dataclasses.dataclass
class PostOrderLineItemsHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostOrderLineItemsRequest:
    headers: PostOrderLineItemsHeaders = dataclasses.field()
    request: shared_postorderlineitemsrequesttype.PostOrderLineItemsRequestType = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostOrderLineItemsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_order_line_item_response_type: Optional[shared_getorderlineitemresponsetype.GetOrderLineItemResponseType] = dataclasses.field(default=None)
    
