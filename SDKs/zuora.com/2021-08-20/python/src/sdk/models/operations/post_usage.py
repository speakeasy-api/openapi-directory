import dataclasses
from typing import Optional
from ..shared import postusageresponsetype as shared_postusageresponsetype


@dataclasses.dataclass
class PostUsageHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostUsageRequestBodyFile:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclasses.dataclass
class PostUsageRequestBody:
    file: PostUsageRequestBodyFile = dataclasses.field(metadata={'multipart_form': { 'file': True }})
    

@dataclasses.dataclass
class PostUsageRequest:
    headers: PostUsageHeaders = dataclasses.field()
    request: PostUsageRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostUsageResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    post_usage_response_type: Optional[shared_postusageresponsetype.PostUsageResponseType] = dataclasses.field(default=None)
    
