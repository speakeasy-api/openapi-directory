import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import error as shared_error
from ..shared import video as shared_video


@dataclass_json
@dataclasses.dataclass
class UploadVideoAlt1RequestBodyEmbedButtons:
    embed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed') }})
    fullscreen: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullscreen') }})
    hd: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hd') }})
    like: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('like') }})
    scaling: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaling') }})
    share: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('share') }})
    watchlater: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchlater') }})
    

@dataclass_json
@dataclasses.dataclass
class UploadVideoAlt1RequestBodyEmbedLogosCustom:
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    sticky: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sticky') }})
    

@dataclass_json
@dataclasses.dataclass
class UploadVideoAlt1RequestBodyEmbedLogos:
    custom: Optional[UploadVideoAlt1RequestBodyEmbedLogosCustom] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom') }})
    vimeo: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vimeo') }})
    
class UploadVideoAlt1RequestBodyEmbedTitleNameEnum(str, Enum):
    HIDE = "hide"
    SHOW = "show"
    USER = "user"

class UploadVideoAlt1RequestBodyEmbedTitleOwnerEnum(str, Enum):
    HIDE = "hide"
    SHOW = "show"
    USER = "user"

class UploadVideoAlt1RequestBodyEmbedTitlePortraitEnum(str, Enum):
    HIDE = "hide"
    SHOW = "show"
    USER = "user"


@dataclass_json
@dataclasses.dataclass
class UploadVideoAlt1RequestBodyEmbedTitle:
    name: Optional[UploadVideoAlt1RequestBodyEmbedTitleNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    owner: Optional[UploadVideoAlt1RequestBodyEmbedTitleOwnerEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    portrait: Optional[UploadVideoAlt1RequestBodyEmbedTitlePortraitEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portrait') }})
    

@dataclass_json
@dataclasses.dataclass
class UploadVideoAlt1RequestBodyEmbed:
    buttons: Optional[UploadVideoAlt1RequestBodyEmbedButtons] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buttons') }})
    color: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    logos: Optional[UploadVideoAlt1RequestBodyEmbedLogos] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logos') }})
    playbar: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playbar') }})
    title: Optional[UploadVideoAlt1RequestBodyEmbedTitle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    volume: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volume') }})
    
class UploadVideoAlt1RequestBodyLicenseEnum(str, Enum):
    BY = "by"
    BY_NC = "by-nc"
    BY_NC_ND = "by-nc-nd"
    BY_NC_SA = "by-nc-sa"
    BY_ND = "by-nd"
    BY_SA = "by-sa"
    CC0 = "cc0"

class UploadVideoAlt1RequestBodyPrivacyCommentsEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    NOBODY = "nobody"

class UploadVideoAlt1RequestBodyPrivacyEmbedEnum(str, Enum):
    PRIVATE = "private"
    PUBLIC = "public"
    WHITELIST = "whitelist"

class UploadVideoAlt1RequestBodyPrivacyViewEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    DISABLE = "disable"
    NOBODY = "nobody"
    PASSWORD = "password"
    UNLISTED = "unlisted"
    USERS = "users"


@dataclass_json
@dataclasses.dataclass
class UploadVideoAlt1RequestBodyPrivacy:
    add: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add') }})
    comments: Optional[UploadVideoAlt1RequestBodyPrivacyCommentsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    download: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download') }})
    embed: Optional[UploadVideoAlt1RequestBodyPrivacyEmbedEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed') }})
    view: Optional[UploadVideoAlt1RequestBodyPrivacyViewEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('view') }})
    
class UploadVideoAlt1RequestBodyRatingsMpaaReasonEnum(str, Enum):
    AT = "at"
    BN = "bn"
    N = "n"
    SL = "sl"
    SS = "ss"
    V = "v"


@dataclass_json
@dataclasses.dataclass
class UploadVideoAlt1RequestBodyRatingsMpaa:
    reason: Optional[UploadVideoAlt1RequestBodyRatingsMpaaReasonEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    
class UploadVideoAlt1RequestBodyRatingsTvReasonEnum(str, Enum):
    D = "d"
    FV = "fv"
    L = "l"
    SS = "ss"
    V = "v"


@dataclass_json
@dataclasses.dataclass
class UploadVideoAlt1RequestBodyRatingsTv:
    reason: Optional[UploadVideoAlt1RequestBodyRatingsTvReasonEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    

@dataclass_json
@dataclasses.dataclass
class UploadVideoAlt1RequestBodyRatings:
    mpaa: Optional[UploadVideoAlt1RequestBodyRatingsMpaa] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mpaa') }})
    tv: Optional[UploadVideoAlt1RequestBodyRatingsTv] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tv') }})
    

@dataclass_json
@dataclasses.dataclass
class UploadVideoAlt1RequestBodyReviewPage:
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    

@dataclass_json
@dataclasses.dataclass
class UploadVideoAlt1RequestBodySpatialDirectorTimeline:
    pitch: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pitch') }})
    time_code: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_code') }})
    yaw: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('yaw') }})
    roll: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roll') }})
    
class UploadVideoAlt1RequestBodySpatialProjectionEnum(str, Enum):
    CUBICAL = "cubical"
    CYLINDRICAL = "cylindrical"
    DOME = "dome"
    EQUIRECTANGULAR = "equirectangular"
    PYRAMID = "pyramid"

class UploadVideoAlt1RequestBodySpatialStereoFormatEnum(str, Enum):
    LEFT_RIGHT = "left-right"
    MONO = "mono"
    TOP_BOTTOM = "top-bottom"


@dataclass_json
@dataclasses.dataclass
class UploadVideoAlt1RequestBodySpatial:
    director_timeline: Optional[list[UploadVideoAlt1RequestBodySpatialDirectorTimeline]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('director_timeline') }})
    field_of_view: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field_of_view') }})
    projection: Optional[UploadVideoAlt1RequestBodySpatialProjectionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projection') }})
    stereo_format: Optional[UploadVideoAlt1RequestBodySpatialStereoFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stereo_format') }})
    
class UploadVideoAlt1RequestBodyUploadApproachEnum(str, Enum):
    POST = "post"
    PULL = "pull"
    STREAMING = "streaming"
    TUS = "tus"


@dataclass_json
@dataclasses.dataclass
class UploadVideoAlt1RequestBodyUpload:
    approach: UploadVideoAlt1RequestBodyUploadApproachEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('approach') }})
    link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    redirect_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirect_url') }})
    size: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    

@dataclass_json
@dataclasses.dataclass
class UploadVideoAlt1RequestBody:
    upload: UploadVideoAlt1RequestBodyUpload = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('upload') }})
    content_rating: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_rating') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    embed: Optional[UploadVideoAlt1RequestBodyEmbed] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed') }})
    license: Optional[UploadVideoAlt1RequestBodyLicenseEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('license') }})
    locale: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locale') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    privacy: Optional[UploadVideoAlt1RequestBodyPrivacy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    ratings: Optional[UploadVideoAlt1RequestBodyRatings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ratings') }})
    review_page: Optional[UploadVideoAlt1RequestBodyReviewPage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('review_page') }})
    spatial: Optional[UploadVideoAlt1RequestBodySpatial] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spatial') }})
    

@dataclasses.dataclass
class UploadVideoAlt1Request:
    request: UploadVideoAlt1RequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/vnd.vimeo.video+json' }})
    

@dataclasses.dataclass
class UploadVideoAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    video: Optional[shared_video.Video] = dataclasses.field(default=None)
    
