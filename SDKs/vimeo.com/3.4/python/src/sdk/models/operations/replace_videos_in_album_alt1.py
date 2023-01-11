import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import legacy_error as shared_legacy_error


@dataclasses.dataclass
class ReplaceVideosInAlbumAlt1PathParams:
    album_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'album_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ReplaceVideosInAlbumAlt1RequestBody:
    videos: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    

@dataclasses.dataclass
class ReplaceVideosInAlbumAlt1Security:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ReplaceVideosInAlbumAlt1Request:
    path_params: ReplaceVideosInAlbumAlt1PathParams = dataclasses.field()
    request: ReplaceVideosInAlbumAlt1RequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: ReplaceVideosInAlbumAlt1Security = dataclasses.field()
    

@dataclasses.dataclass
class ReplaceVideosInAlbumAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    
