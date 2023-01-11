import dataclasses
from typing import Optional
from ..shared import getattachmentresponsetype as shared_getattachmentresponsetype


@dataclasses.dataclass
class GetAttachmentsPathParams:
    attachment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'attachment-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAttachmentsHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAttachmentsRequest:
    headers: GetAttachmentsHeaders = dataclasses.field()
    path_params: GetAttachmentsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAttachmentsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_attachment_response_type: Optional[shared_getattachmentresponsetype.GetAttachmentResponseType] = dataclasses.field(default=None)
    
