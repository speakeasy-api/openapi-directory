import dataclasses
from typing import Optional
from ..shared import legacy_error as shared_legacy_error


@dataclasses.dataclass
class GetVideoEmbedPresetPathParams:
    preset_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'preset_id', 'style': 'simple', 'explode': False }})
    video_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVideoEmbedPresetRequest:
    path_params: GetVideoEmbedPresetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetVideoEmbedPresetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    
