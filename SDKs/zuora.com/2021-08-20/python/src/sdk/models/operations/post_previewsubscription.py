import dataclasses
from typing import Any,Optional
from ..shared import postsubscriptionpreviewresponsetype as shared_postsubscriptionpreviewresponsetype


@dataclasses.dataclass
class PostPreviewSubscriptionHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    zuora_version: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'zuora-version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostPreviewSubscriptionRequest:
    headers: PostPreviewSubscriptionHeaders = dataclasses.field()
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostPreviewSubscriptionResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    post_subscription_preview_response_type: Optional[shared_postsubscriptionpreviewresponsetype.PostSubscriptionPreviewResponseType] = dataclasses.field(default=None)
    
