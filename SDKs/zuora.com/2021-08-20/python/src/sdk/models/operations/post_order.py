import dataclasses
from typing import Optional
from ..shared import postorderrequesttype as shared_postorderrequesttype
from ..shared import postorderresponsetype as shared_postorderresponsetype


@dataclasses.dataclass
class PostOrderQueryParams:
    return_ids: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'returnIds', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostOrderHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    zuora_version: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'zuora-version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostOrderRequest:
    headers: PostOrderHeaders = dataclasses.field()
    query_params: PostOrderQueryParams = dataclasses.field()
    request: shared_postorderrequesttype.PostOrderRequestType = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostOrderResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    post_order_response_type: Optional[shared_postorderresponsetype.PostOrderResponseType] = dataclasses.field(default=None)
    
