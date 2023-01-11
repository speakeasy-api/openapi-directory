import dataclasses
from typing import Optional
from ..shared import comment as shared_comment
from ..shared import legacy_error as shared_legacy_error


@dataclasses.dataclass
class GetCommentRepliesPathParams:
    comment_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'comment_id', 'style': 'simple', 'explode': False }})
    video_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCommentRepliesQueryParams:
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCommentRepliesRequest:
    path_params: GetCommentRepliesPathParams = dataclasses.field()
    query_params: GetCommentRepliesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCommentRepliesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    comments: Optional[list[shared_comment.Comment]] = dataclasses.field(default=None)
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    
