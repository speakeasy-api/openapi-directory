import dataclasses
from typing import Optional
from ..shared import postorderpreviewrequesttype as shared_postorderpreviewrequesttype
from ..shared import postorderpreviewresponsetype as shared_postorderpreviewresponsetype


@dataclasses.dataclass
class PostPreviewOrderHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostPreviewOrderRequest:
    headers: PostPreviewOrderHeaders = dataclasses.field()
    request: shared_postorderpreviewrequesttype.PostOrderPreviewRequestType = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostPreviewOrderResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    post_order_preview_response_type: Optional[shared_postorderpreviewresponsetype.PostOrderPreviewResponseType] = dataclasses.field(default=None)
    
