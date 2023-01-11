import dataclasses
from typing import Optional
from enum import Enum
from ..shared import global_header_zuora_entity_ids_single_enum as shared_global_header_zuora_entity_ids_single_enum
from ..shared import postattachmentresponsetype as shared_postattachmentresponsetype


@dataclasses.dataclass
class PostAttachmentsQueryParams:
    associated_object_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'associatedObjectKey', 'style': 'form', 'explode': True }})
    associated_object_type: shared_global_header_zuora_entity_ids_single_enum.GlobalHeaderZuoraEntityIdsSingleEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'associatedObjectType', 'style': 'form', 'explode': True }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'description', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostAttachmentsHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostAttachmentsRequestBodyFile:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclasses.dataclass
class PostAttachmentsRequestBody:
    file: PostAttachmentsRequestBodyFile = dataclasses.field(metadata={'multipart_form': { 'file': True }})
    

@dataclasses.dataclass
class PostAttachmentsRequest:
    headers: PostAttachmentsHeaders = dataclasses.field()
    query_params: PostAttachmentsQueryParams = dataclasses.field()
    request: PostAttachmentsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostAttachmentsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    post_attachment_response_type: Optional[shared_postattachmentresponsetype.PostAttachmentResponseType] = dataclasses.field(default=None)
    
