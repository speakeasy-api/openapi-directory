import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import legacy_error as shared_legacy_error
from ..shared import text_track as shared_text_track


@dataclasses.dataclass
class CreateTextTrackAlt1PathParams:
    channel_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    video_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    
class CreateTextTrackAlt1RequestBodyTypeEnum(str, Enum):
    CAPTIONS = "captions"
    CHAPTERS = "chapters"
    DESCRIPTIONS = "descriptions"
    METADATA = "metadata"
    SUBTITLES = "subtitles"


@dataclass_json
@dataclasses.dataclass
class CreateTextTrackAlt1RequestBody:
    language: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: CreateTextTrackAlt1RequestBodyTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    

@dataclasses.dataclass
class CreateTextTrackAlt1Security:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateTextTrackAlt1Request:
    path_params: CreateTextTrackAlt1PathParams = dataclasses.field()
    request: CreateTextTrackAlt1RequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/vnd.vimeo.video.texttrack+json' }})
    security: CreateTextTrackAlt1Security = dataclasses.field()
    

@dataclasses.dataclass
class CreateTextTrackAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    text_track: Optional[shared_text_track.TextTrack] = dataclasses.field(default=None)
    
