import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import legacy_error as shared_legacy_error
from ..shared import text_track as shared_text_track


@dataclasses.dataclass
class GetTextTrackPathParams:
    texttrack_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'texttrack_id', 'style': 'simple', 'explode': False }})
    video_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTextTrackRequest:
    path_params: GetTextTrackPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTextTrackResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    text_track: Optional[shared_text_track.TextTrack] = dataclasses.field(default=None)
    
