import dataclasses
from typing import Optional
from enum import Enum
from ..shared import comment as shared_comment


@dataclasses.dataclass
class GetCommentsPathParams:
    video_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    
class GetCommentsDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"


@dataclasses.dataclass
class GetCommentsQueryParams:
    direction: Optional[GetCommentsDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCommentsRequest:
    path_params: GetCommentsPathParams = dataclasses.field()
    query_params: GetCommentsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCommentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    comments: Optional[list[shared_comment.Comment]] = dataclasses.field(default=None)
    
