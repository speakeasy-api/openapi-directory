import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import legacy_error as shared_legacy_error
from ..shared import video as shared_video


@dataclasses.dataclass
class EditVideoPathParams:
    video_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class EditVideoRequestBodyEmbedButtons:
    embed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed') }})
    fullscreen: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullscreen') }})
    hd: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hd') }})
    like: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('like') }})
    scaling: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaling') }})
    share: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('share') }})
    watchlater: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchlater') }})
    

@dataclass_json
@dataclasses.dataclass
class EditVideoRequestBodyEmbedLogosCustom:
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    sticky: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sticky') }})
    

@dataclass_json
@dataclasses.dataclass
class EditVideoRequestBodyEmbedLogos:
    custom: Optional[EditVideoRequestBodyEmbedLogosCustom] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom') }})
    vimeo: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vimeo') }})
    
class EditVideoRequestBodyEmbedTitleNameEnum(str, Enum):
    HIDE = "hide"
    SHOW = "show"
    USER = "user"

class EditVideoRequestBodyEmbedTitleOwnerEnum(str, Enum):
    HIDE = "hide"
    SHOW = "show"
    USER = "user"

class EditVideoRequestBodyEmbedTitlePortraitEnum(str, Enum):
    HIDE = "hide"
    SHOW = "show"
    USER = "user"


@dataclass_json
@dataclasses.dataclass
class EditVideoRequestBodyEmbedTitle:
    name: Optional[EditVideoRequestBodyEmbedTitleNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    owner: Optional[EditVideoRequestBodyEmbedTitleOwnerEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    portrait: Optional[EditVideoRequestBodyEmbedTitlePortraitEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portrait') }})
    

@dataclass_json
@dataclasses.dataclass
class EditVideoRequestBodyEmbed:
    buttons: Optional[EditVideoRequestBodyEmbedButtons] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buttons') }})
    color: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    logos: Optional[EditVideoRequestBodyEmbedLogos] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logos') }})
    playbar: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playbar') }})
    title: Optional[EditVideoRequestBodyEmbedTitle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    volume: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volume') }})
    
class EditVideoRequestBodyLicenseEnum(str, Enum):
    BY = "by"
    BY_NC = "by-nc"
    BY_NC_ND = "by-nc-nd"
    BY_NC_SA = "by-nc-sa"
    BY_ND = "by-nd"
    BY_SA = "by-sa"
    CC0 = "cc0"

class EditVideoRequestBodyPrivacyCommentsEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    NOBODY = "nobody"

class EditVideoRequestBodyPrivacyEmbedEnum(str, Enum):
    PRIVATE = "private"
    PUBLIC = "public"
    WHITELIST = "whitelist"

class EditVideoRequestBodyPrivacyViewEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    DISABLE = "disable"
    NOBODY = "nobody"
    PASSWORD = "password"
    UNLISTED = "unlisted"
    USERS = "users"


@dataclass_json
@dataclasses.dataclass
class EditVideoRequestBodyPrivacy:
    add: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add') }})
    comments: Optional[EditVideoRequestBodyPrivacyCommentsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    download: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download') }})
    embed: Optional[EditVideoRequestBodyPrivacyEmbedEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed') }})
    view: Optional[EditVideoRequestBodyPrivacyViewEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('view') }})
    
class EditVideoRequestBodyRatingsMpaaReasonEnum(str, Enum):
    AT = "at"
    BN = "bn"
    N = "n"
    SL = "sl"
    SS = "ss"
    V = "v"


@dataclass_json
@dataclasses.dataclass
class EditVideoRequestBodyRatingsMpaa:
    reason: Optional[EditVideoRequestBodyRatingsMpaaReasonEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    
class EditVideoRequestBodyRatingsTvReasonEnum(str, Enum):
    D = "d"
    FV = "fv"
    L = "l"
    SS = "ss"
    V = "v"


@dataclass_json
@dataclasses.dataclass
class EditVideoRequestBodyRatingsTv:
    reason: Optional[EditVideoRequestBodyRatingsTvReasonEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    

@dataclass_json
@dataclasses.dataclass
class EditVideoRequestBodyRatings:
    mpaa: Optional[EditVideoRequestBodyRatingsMpaa] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mpaa') }})
    tv: Optional[EditVideoRequestBodyRatingsTv] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tv') }})
    

@dataclass_json
@dataclasses.dataclass
class EditVideoRequestBodyReviewPage:
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    

@dataclass_json
@dataclasses.dataclass
class EditVideoRequestBodySpatialDirectorTimeline:
    pitch: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pitch') }})
    time_code: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_code') }})
    yaw: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('yaw') }})
    roll: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roll') }})
    
class EditVideoRequestBodySpatialProjectionEnum(str, Enum):
    CUBICAL = "cubical"
    CYLINDRICAL = "cylindrical"
    DOME = "dome"
    EQUIRECTANGULAR = "equirectangular"
    PYRAMID = "pyramid"

class EditVideoRequestBodySpatialStereoFormatEnum(str, Enum):
    LEFT_RIGHT = "left-right"
    MONO = "mono"
    TOP_BOTTOM = "top-bottom"


@dataclass_json
@dataclasses.dataclass
class EditVideoRequestBodySpatial:
    director_timeline: Optional[list[EditVideoRequestBodySpatialDirectorTimeline]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('director_timeline') }})
    field_of_view: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field_of_view') }})
    projection: Optional[EditVideoRequestBodySpatialProjectionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projection') }})
    stereo_format: Optional[EditVideoRequestBodySpatialStereoFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stereo_format') }})
    

@dataclass_json
@dataclasses.dataclass
class EditVideoRequestBody:
    content_rating: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_rating') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    embed: Optional[EditVideoRequestBodyEmbed] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed') }})
    license: Optional[EditVideoRequestBodyLicenseEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('license') }})
    locale: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locale') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    privacy: Optional[EditVideoRequestBodyPrivacy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    ratings: Optional[EditVideoRequestBodyRatings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ratings') }})
    review_page: Optional[EditVideoRequestBodyReviewPage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('review_page') }})
    spatial: Optional[EditVideoRequestBodySpatial] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spatial') }})
    

@dataclasses.dataclass
class EditVideoSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EditVideoRequest:
    path_params: EditVideoPathParams = dataclasses.field()
    request: EditVideoRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/vnd.vimeo.video+json' }})
    security: EditVideoSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EditVideoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    video: Optional[shared_video.Video] = dataclasses.field(default=None)
    
