import dataclasses
from typing import Optional
from ..shared import legacy_error as shared_legacy_error
from ..shared import video as shared_video


@dataclasses.dataclass
class GetVideoPathParams:
    video_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVideoRequest:
    path_params: GetVideoPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetVideoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    video: Optional[shared_video.Video] = dataclasses.field(default=None)
    
