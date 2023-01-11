import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import legacy_error as shared_legacy_error


@dataclasses.dataclass
class ReplaceVideosInAlbumPathParams:
    album_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'album_id', 'style': 'simple', 'explode': False }})
    user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ReplaceVideosInAlbumRequestBody:
    videos: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    

@dataclasses.dataclass
class ReplaceVideosInAlbumSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ReplaceVideosInAlbumRequest:
    path_params: ReplaceVideosInAlbumPathParams = dataclasses.field()
    request: ReplaceVideosInAlbumRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: ReplaceVideosInAlbumSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ReplaceVideosInAlbumResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    
