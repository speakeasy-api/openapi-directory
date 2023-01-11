import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import album as shared_album
from ..shared import error as shared_error


@dataclasses.dataclass
class SetVideoAsAlbumThumbnailPathParams:
    album_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'album_id', 'style': 'simple', 'explode': False }})
    user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    video_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class SetVideoAsAlbumThumbnailRequestBody:
    time_code: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_code') }})
    

@dataclasses.dataclass
class SetVideoAsAlbumThumbnailSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class SetVideoAsAlbumThumbnailRequest:
    path_params: SetVideoAsAlbumThumbnailPathParams = dataclasses.field()
    security: SetVideoAsAlbumThumbnailSecurity = dataclasses.field()
    request: Optional[SetVideoAsAlbumThumbnailRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SetVideoAsAlbumThumbnailResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    album: Optional[shared_album.Album] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
