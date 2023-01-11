import dataclasses
from typing import Optional
from ..shared import legacy_error as shared_legacy_error
from ..shared import text_track as shared_text_track


@dataclasses.dataclass
class GetTextTracksAlt1PathParams:
    channel_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    video_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTextTracksAlt1Request:
    path_params: GetTextTracksAlt1PathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTextTracksAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    text_tracks: Optional[list[shared_text_track.TextTrack]] = dataclasses.field(default=None)
    
