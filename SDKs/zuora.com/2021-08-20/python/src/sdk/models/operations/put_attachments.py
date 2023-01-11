import dataclasses
from typing import Optional
from ..shared import putattachmenttype as shared_putattachmenttype
from ..shared import commonresponsetype as shared_commonresponsetype


@dataclasses.dataclass
class PutAttachmentsPathParams:
    attachment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'attachment-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutAttachmentsHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutAttachmentsRequest:
    headers: PutAttachmentsHeaders = dataclasses.field()
    path_params: PutAttachmentsPathParams = dataclasses.field()
    request: Optional[shared_putattachmenttype.PutAttachmentType] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutAttachmentsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    common_response_type: Optional[shared_commonresponsetype.CommonResponseType] = dataclasses.field(default=None)
    
