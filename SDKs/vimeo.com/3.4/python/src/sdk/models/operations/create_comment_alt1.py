import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import comment as shared_comment
from ..shared import error as shared_error


@dataclasses.dataclass
class CreateCommentAlt1PathParams:
    channel_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    video_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateCommentAlt1RequestBody:
    text: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    

@dataclasses.dataclass
class CreateCommentAlt1Security:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateCommentAlt1Request:
    path_params: CreateCommentAlt1PathParams = dataclasses.field()
    request: CreateCommentAlt1RequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/vnd.vimeo.comment+json' }})
    security: CreateCommentAlt1Security = dataclasses.field()
    

@dataclasses.dataclass
class CreateCommentAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    comment: Optional[shared_comment.Comment] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
