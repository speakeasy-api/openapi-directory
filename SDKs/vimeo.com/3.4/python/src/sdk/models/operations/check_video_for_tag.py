import dataclasses
from typing import Optional
from ..shared import legacy_error as shared_legacy_error
from ..shared import tag as shared_tag


@dataclasses.dataclass
class CheckVideoForTagPathParams:
    video_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    word: str = dataclasses.field(metadata={'path_param': { 'field_name': 'word', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CheckVideoForTagRequest:
    path_params: CheckVideoForTagPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CheckVideoForTagResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    tag: Optional[shared_tag.Tag] = dataclasses.field(default=None)
    
