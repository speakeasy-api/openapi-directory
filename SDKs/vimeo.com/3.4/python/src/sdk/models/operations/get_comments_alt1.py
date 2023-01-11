import dataclasses
from typing import Optional
from enum import Enum
from ..shared import comment as shared_comment


@dataclasses.dataclass
class GetCommentsAlt1PathParams:
    channel_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    video_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    
class GetCommentsAlt1DirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"


@dataclasses.dataclass
class GetCommentsAlt1QueryParams:
    direction: Optional[GetCommentsAlt1DirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCommentsAlt1Request:
    path_params: GetCommentsAlt1PathParams = dataclasses.field()
    query_params: GetCommentsAlt1QueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCommentsAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    comments: Optional[list[shared_comment.Comment]] = dataclasses.field(default=None)
    
