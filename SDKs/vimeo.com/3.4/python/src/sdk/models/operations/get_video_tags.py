import dataclasses
from typing import Optional
from ..shared import tag as shared_tag


@dataclasses.dataclass
class GetVideoTagsPathParams:
    video_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVideoTagsRequest:
    path_params: GetVideoTagsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetVideoTagsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None)
    
