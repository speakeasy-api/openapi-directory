import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import album as shared_album
from ..shared import legacy_error as shared_legacy_error


@dataclasses.dataclass
class CreateAlbumPathParams:
    user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    
class CreateAlbumRequestBodyLayoutEnum(str, Enum):
    GRID = "grid"
    PLAYER = "player"

class CreateAlbumRequestBodyPrivacyEnum(str, Enum):
    ANYBODY = "anybody"
    EMBED_ONLY = "embed_only"
    PASSWORD = "password"

class CreateAlbumRequestBodySortEnum(str, Enum):
    ADDED_FIRST = "added_first"
    ADDED_LAST = "added_last"
    ALPHABETICAL = "alphabetical"
    ARRANGED = "arranged"
    COMMENTS = "comments"
    LIKES = "likes"
    NEWEST = "newest"
    OLDEST = "oldest"
    PLAYS = "plays"

class CreateAlbumRequestBodyThemeEnum(str, Enum):
    DARK = "dark"
    STANDARD = "standard"


@dataclass_json
@dataclasses.dataclass
class CreateAlbumRequestBody:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    brand_color: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brand_color') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    hide_nav: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hide_nav') }})
    layout: Optional[CreateAlbumRequestBodyLayoutEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layout') }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    privacy: Optional[CreateAlbumRequestBodyPrivacyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    review_mode: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('review_mode') }})
    sort: Optional[CreateAlbumRequestBodySortEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sort') }})
    theme: Optional[CreateAlbumRequestBodyThemeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('theme') }})
    

@dataclasses.dataclass
class CreateAlbumSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateAlbumRequest:
    path_params: CreateAlbumPathParams = dataclasses.field()
    request: CreateAlbumRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/vnd.vimeo.album+json' }})
    security: CreateAlbumSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateAlbumResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    album: Optional[shared_album.Album] = dataclasses.field(default=None)
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    
