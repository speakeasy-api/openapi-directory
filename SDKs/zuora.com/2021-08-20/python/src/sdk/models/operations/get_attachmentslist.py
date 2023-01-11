import dataclasses
from typing import Optional
from enum import Enum
from ..shared import global_request_pagesize_enum as shared_global_request_pagesize_enum
from ..shared import getattachmentsresponsetype as shared_getattachmentsresponsetype


@dataclasses.dataclass
class GetAttachmentsListPathParams:
    object_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'object-key', 'style': 'simple', 'explode': False }})
    object_type: shared_global_request_pagesize_enum.GlobalRequestPageSizeEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'object-type', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAttachmentsListQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAttachmentsListHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAttachmentsListRequest:
    headers: GetAttachmentsListHeaders = dataclasses.field()
    path_params: GetAttachmentsListPathParams = dataclasses.field()
    query_params: GetAttachmentsListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAttachmentsListResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_attachments_response_type: Optional[shared_getattachmentsresponsetype.GetAttachmentsResponseType] = dataclasses.field(default=None)
    
