import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import error as shared_error
from ..shared import video as shared_video


@dataclasses.dataclass
class UploadVideoPathParams:
    user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UploadVideoRequestBodyEmbedButtons:
    embed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed') }})
    fullscreen: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullscreen') }})
    hd: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hd') }})
    like: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('like') }})
    scaling: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaling') }})
    share: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('share') }})
    watchlater: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchlater') }})
    

@dataclass_json
@dataclasses.dataclass
class UploadVideoRequestBodyEmbedLogosCustom:
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    sticky: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sticky') }})
    

@dataclass_json
@dataclasses.dataclass
class UploadVideoRequestBodyEmbedLogos:
    custom: Optional[UploadVideoRequestBodyEmbedLogosCustom] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom') }})
    vimeo: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vimeo') }})
    
class UploadVideoRequestBodyEmbedTitleNameEnum(str, Enum):
    HIDE = "hide"
    SHOW = "show"
    USER = "user"

class UploadVideoRequestBodyEmbedTitleOwnerEnum(str, Enum):
    HIDE = "hide"
    SHOW = "show"
    USER = "user"

class UploadVideoRequestBodyEmbedTitlePortraitEnum(str, Enum):
    HIDE = "hide"
    SHOW = "show"
    USER = "user"


@dataclass_json
@dataclasses.dataclass
class UploadVideoRequestBodyEmbedTitle:
    name: Optional[UploadVideoRequestBodyEmbedTitleNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    owner: Optional[UploadVideoRequestBodyEmbedTitleOwnerEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    portrait: Optional[UploadVideoRequestBodyEmbedTitlePortraitEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portrait') }})
    

@dataclass_json
@dataclasses.dataclass
class UploadVideoRequestBodyEmbed:
    buttons: Optional[UploadVideoRequestBodyEmbedButtons] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buttons') }})
    color: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    logos: Optional[UploadVideoRequestBodyEmbedLogos] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logos') }})
    playbar: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playbar') }})
    title: Optional[UploadVideoRequestBodyEmbedTitle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    volume: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volume') }})
    
class UploadVideoRequestBodyLicenseEnum(str, Enum):
    BY = "by"
    BY_NC = "by-nc"
    BY_NC_ND = "by-nc-nd"
    BY_NC_SA = "by-nc-sa"
    BY_ND = "by-nd"
    BY_SA = "by-sa"
    CC0 = "cc0"

class UploadVideoRequestBodyPrivacyCommentsEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    NOBODY = "nobody"

class UploadVideoRequestBodyPrivacyEmbedEnum(str, Enum):
    PRIVATE = "private"
    PUBLIC = "public"
    WHITELIST = "whitelist"

class UploadVideoRequestBodyPrivacyViewEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    DISABLE = "disable"
    NOBODY = "nobody"
    PASSWORD = "password"
    UNLISTED = "unlisted"
    USERS = "users"


@dataclass_json
@dataclasses.dataclass
class UploadVideoRequestBodyPrivacy:
    add: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add') }})
    comments: Optional[UploadVideoRequestBodyPrivacyCommentsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    download: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download') }})
    embed: Optional[UploadVideoRequestBodyPrivacyEmbedEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed') }})
    view: Optional[UploadVideoRequestBodyPrivacyViewEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('view') }})
    
class UploadVideoRequestBodyRatingsMpaaReasonEnum(str, Enum):
    AT = "at"
    BN = "bn"
    N = "n"
    SL = "sl"
    SS = "ss"
    V = "v"


@dataclass_json
@dataclasses.dataclass
class UploadVideoRequestBodyRatingsMpaa:
    reason: Optional[UploadVideoRequestBodyRatingsMpaaReasonEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    
class UploadVideoRequestBodyRatingsTvReasonEnum(str, Enum):
    D = "d"
    FV = "fv"
    L = "l"
    SS = "ss"
    V = "v"


@dataclass_json
@dataclasses.dataclass
class UploadVideoRequestBodyRatingsTv:
    reason: Optional[UploadVideoRequestBodyRatingsTvReasonEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    

@dataclass_json
@dataclasses.dataclass
class UploadVideoRequestBodyRatings:
    mpaa: Optional[UploadVideoRequestBodyRatingsMpaa] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mpaa') }})
    tv: Optional[UploadVideoRequestBodyRatingsTv] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tv') }})
    

@dataclass_json
@dataclasses.dataclass
class UploadVideoRequestBodyReviewPage:
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    

@dataclass_json
@dataclasses.dataclass
class UploadVideoRequestBodySpatialDirectorTimeline:
    pitch: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pitch') }})
    time_code: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_code') }})
    yaw: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('yaw') }})
    roll: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roll') }})
    
class UploadVideoRequestBodySpatialProjectionEnum(str, Enum):
    CUBICAL = "cubical"
    CYLINDRICAL = "cylindrical"
    DOME = "dome"
    EQUIRECTANGULAR = "equirectangular"
    PYRAMID = "pyramid"

class UploadVideoRequestBodySpatialStereoFormatEnum(str, Enum):
    LEFT_RIGHT = "left-right"
    MONO = "mono"
    TOP_BOTTOM = "top-bottom"


@dataclass_json
@dataclasses.dataclass
class UploadVideoRequestBodySpatial:
    director_timeline: Optional[list[UploadVideoRequestBodySpatialDirectorTimeline]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('director_timeline') }})
    field_of_view: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field_of_view') }})
    projection: Optional[UploadVideoRequestBodySpatialProjectionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projection') }})
    stereo_format: Optional[UploadVideoRequestBodySpatialStereoFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stereo_format') }})
    
class UploadVideoRequestBodyUploadApproachEnum(str, Enum):
    POST = "post"
    PULL = "pull"
    STREAMING = "streaming"
    TUS = "tus"


@dataclass_json
@dataclasses.dataclass
class UploadVideoRequestBodyUpload:
    approach: UploadVideoRequestBodyUploadApproachEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('approach') }})
    link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    redirect_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirect_url') }})
    size: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    

@dataclass_json
@dataclasses.dataclass
class UploadVideoRequestBody:
    upload: UploadVideoRequestBodyUpload = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('upload') }})
    content_rating: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_rating') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    embed: Optional[UploadVideoRequestBodyEmbed] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed') }})
    license: Optional[UploadVideoRequestBodyLicenseEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('license') }})
    locale: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locale') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    privacy: Optional[UploadVideoRequestBodyPrivacy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    ratings: Optional[UploadVideoRequestBodyRatings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ratings') }})
    review_page: Optional[UploadVideoRequestBodyReviewPage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('review_page') }})
    spatial: Optional[UploadVideoRequestBodySpatial] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spatial') }})
    

@dataclasses.dataclass
class UploadVideoRequest:
    path_params: UploadVideoPathParams = dataclasses.field()
    request: UploadVideoRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/vnd.vimeo.video+json' }})
    

@dataclasses.dataclass
class UploadVideoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    video: Optional[shared_video.Video] = dataclasses.field(default=None)
    
