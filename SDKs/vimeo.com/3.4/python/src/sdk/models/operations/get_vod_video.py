import dataclasses
from typing import Optional
from ..shared import video as shared_video


@dataclasses.dataclass
class GetVodVideoPathParams:
    ondemand_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    video_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVodVideoRequest:
    path_params: GetVodVideoPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetVodVideoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    video: Optional[shared_video.Video] = dataclasses.field(default=None)
    
