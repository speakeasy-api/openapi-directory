import dataclasses
from typing import Optional
from ..shared import comment as shared_comment
from ..shared import legacy_error as shared_legacy_error


@dataclasses.dataclass
class GetCommentPathParams:
    comment_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'comment_id', 'style': 'simple', 'explode': False }})
    video_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCommentRequest:
    path_params: GetCommentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCommentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    comment: Optional[shared_comment.Comment] = dataclasses.field(default=None)
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    
