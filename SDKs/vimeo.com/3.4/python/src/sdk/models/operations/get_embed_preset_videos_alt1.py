import dataclasses
from typing import Optional
from ..shared import video as shared_video


@dataclasses.dataclass
class GetEmbedPresetVideosAlt1PathParams:
    preset_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'preset_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEmbedPresetVideosAlt1QueryParams:
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetEmbedPresetVideosAlt1Request:
    path_params: GetEmbedPresetVideosAlt1PathParams = dataclasses.field()
    query_params: GetEmbedPresetVideosAlt1QueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEmbedPresetVideosAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    videos: Optional[list[shared_video.Video]] = dataclasses.field(default=None)
    
