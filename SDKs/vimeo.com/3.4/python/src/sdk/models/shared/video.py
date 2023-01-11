import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import user as shared_user
from ..shared import picture as shared_picture
from ..shared import category as shared_category
from ..shared import embed_settings as shared_embed_settings
from ..shared import tag as shared_tag

class VideoContextActionEnum(str, Enum):
    ADDED_TO = "Added to"
    APPEARANCE_BY = "Appearance by"
    LIKED_BY = "Liked by"
    UPLOADED_BY = "Uploaded by"


@dataclass_json
@dataclasses.dataclass
class VideoContext:
    r"""VideoContext
    The context of the video's subscription, if this video is part of a subscription.
    """
    
    action: VideoContextActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    resource: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    resource_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    
class VideoLicenseEnum(str, Enum):
    BY = "by"
    BY_NC = "by-nc"
    BY_NC_ND = "by-nc-nd"
    BY_NC_SA = "by-nc-sa"
    BY_ND = "by-nd"
    BY_SA = "by-sa"
    CC0 = "cc0"


@dataclass_json
@dataclasses.dataclass
class VideoMetadataConnectionsComments:
    r"""VideoMetadataConnectionsComments
    Information about the comments on this video.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoMetadataConnectionsCredits:
    r"""VideoMetadataConnectionsCredits
    Information about the users credited in this video.
    """
    
    options: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoMetadataConnectionsLikes:
    r"""VideoMetadataConnectionsLikes
    Information about the users who have liked this video.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoMetadataConnectionsOndemand:
    r"""VideoMetadataConnectionsOndemand
    Information about this video's ondemand data.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    resource_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoMetadataConnectionsPictures:
    r"""VideoMetadataConnectionsPictures
    Information about this video's thumbnails.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoMetadataConnectionsPlayback:
    r"""VideoMetadataConnectionsPlayback
    The DRM playback status connection for this video.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoMetadataConnectionsRecommendations:
    r"""VideoMetadataConnectionsRecommendations
    The recommendations for this video.
    """
    
    options: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoMetadataConnectionsRelated:
    r"""VideoMetadataConnectionsRelated
    Related content for this video.
    """
    
    options: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoMetadataConnectionsSeason:
    r"""VideoMetadataConnectionsSeason
    Information about the video's season.
    """
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoMetadataConnectionsTexttracks:
    r"""VideoMetadataConnectionsTexttracks
    Information about this video's text tracks.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoMetadataConnectionsTrailer:
    r"""VideoMetadataConnectionsTrailer
    Information about this video's VOD trailer.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    resource_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoMetadataConnectionsUsersWithAccess:
    r"""VideoMetadataConnectionsUsersWithAccess
    Information about the user privacy of this video, if the video privacy is `users`.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoMetadataConnectionsVersions:
    r"""VideoMetadataConnectionsVersions
    Information about the versions of this video.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    current_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoMetadataConnections:
    r"""VideoMetadataConnections
    A list of resource URIs related to the video.
    """
    
    comments: VideoMetadataConnectionsComments = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    credits: VideoMetadataConnectionsCredits = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('credits') }})
    likes: VideoMetadataConnectionsLikes = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('likes') }})
    ondemand: VideoMetadataConnectionsOndemand = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ondemand') }})
    pictures: VideoMetadataConnectionsPictures = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictures') }})
    playback: VideoMetadataConnectionsPlayback = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('playback') }})
    recommendations: VideoMetadataConnectionsRecommendations = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendations') }})
    related: VideoMetadataConnectionsRelated = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('related') }})
    season: VideoMetadataConnectionsSeason = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('season') }})
    texttracks: VideoMetadataConnectionsTexttracks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('texttracks') }})
    trailer: VideoMetadataConnectionsTrailer = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trailer') }})
    users_with_access: VideoMetadataConnectionsUsersWithAccess = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('users_with_access') }})
    versions: VideoMetadataConnectionsVersions = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('versions') }})
    
class VideoMetadataInteractionsBuyDownloadEnum(str, Enum):
    AVAILABLE = "available"
    PURCHASED = "purchased"
    RESTRICTED = "restricted"
    UNAVAILABLE = "unavailable"

class VideoMetadataInteractionsBuyStreamEnum(str, Enum):
    AVAILABLE = "available"
    PURCHASED = "purchased"
    RESTRICTED = "restricted"
    UNAVAILABLE = "unavailable"


@dataclass_json
@dataclasses.dataclass
class VideoMetadataInteractionsBuy:
    r"""VideoMetadataInteractionsBuy
    The Buy interaction for a On Demand video.
    """
    
    currency: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    display_price: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_price') }})
    download: VideoMetadataInteractionsBuyDownloadEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('download') }})
    drm: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('drm') }})
    link: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    price: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    purchase_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchase_time') }})
    stream: VideoMetadataInteractionsBuyStreamEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stream') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoMetadataInteractionsChannel:
    r"""VideoMetadataInteractionsChannel
    When a video is referenced by a channel URI, if the user is a moderator of the channel, include information about removing the video from the channel.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoMetadataInteractionsLike:
    r"""VideoMetadataInteractionsLike
    Information about whether the authenticated user has liked this video.
    """
    
    added: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    added_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_time') }})
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
class VideoMetadataInteractionsRentStreamEnum(str, Enum):
    AVAILABLE = "available"
    PURCHASED = "purchased"
    RESTRICTED = "restricted"
    UNAVAILABLE = "unavailable"


@dataclass_json
@dataclasses.dataclass
class VideoMetadataInteractionsRent:
    r"""VideoMetadataInteractionsRent
    The Rent interaction for an On Demand video.
    """
    
    currency: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    display_price: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_price') }})
    drm: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('drm') }})
    expires_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_time') }})
    link: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    price: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    purchase_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchase_time') }})
    stream: VideoMetadataInteractionsRentStreamEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stream') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoMetadataInteractionsReport:
    r"""VideoMetadataInteractionsReport
    Information about where and how to report a video.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    reason: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoMetadataInteractionsSubscribe:
    r"""VideoMetadataInteractionsSubscribe
    Subscription information for an On Demand video.
    """
    
    drm: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('drm') }})
    expires_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_time') }})
    purchase_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchase_time') }})
    stream: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stream') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoMetadataInteractionsWatched:
    r"""VideoMetadataInteractionsWatched
    Information about removing this video from the user's list of watched videos.
    """
    
    added: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    added_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_time') }})
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoMetadataInteractionsWatchlater:
    r"""VideoMetadataInteractionsWatchlater
    Information about whether this video appears on the authenticated user's Watch Later list.
    """
    
    added: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    added_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_time') }})
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoMetadataInteractions:
    r"""VideoMetadataInteractions
    A list of resource URIs related to the video.
    """
    
    buy: VideoMetadataInteractionsBuy = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('buy') }})
    channel: VideoMetadataInteractionsChannel = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    like: VideoMetadataInteractionsLike = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('like') }})
    rent: VideoMetadataInteractionsRent = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rent') }})
    report: VideoMetadataInteractionsReport = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('report') }})
    watched: VideoMetadataInteractionsWatched = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('watched') }})
    watchlater: VideoMetadataInteractionsWatchlater = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchlater') }})
    subscribe: Optional[VideoMetadataInteractionsSubscribe] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscribe') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoMetadata:
    r"""VideoMetadata
    The video's metadata.
    """
    
    connections: VideoMetadataConnections = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    interactions: VideoMetadataInteractions = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactions') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoProjectMetadataConnectionsVideos:
    r"""VideoProjectMetadataConnectionsVideos
    A standard connection object indicating how to get all the videos in this project.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoProjectMetadataConnections:
    r"""VideoProjectMetadataConnections
    A list of resource URIs related to the project.
    """
    
    videos: VideoProjectMetadataConnectionsVideos = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoProjectMetadata:
    r"""VideoProjectMetadata
    The project's metadata.
    """
    
    connections: VideoProjectMetadataConnections = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoProject:
    r"""VideoProject
    Information about the folder that contains this video.
    """
    
    created_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_time') }})
    metadata: VideoProjectMetadata = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    modified_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified_time') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    user: shared_user.User = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
class VideoPrivacyCommentsEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    NOBODY = "nobody"

class VideoPrivacyEmbedEnum(str, Enum):
    PRIVATE = "private"
    PUBLIC = "public"

class VideoPrivacyViewEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    DISABLE = "disable"
    NOBODY = "nobody"
    PASSWORD = "password"
    UNLISTED = "unlisted"
    USERS = "users"


@dataclass_json
@dataclasses.dataclass
class VideoPrivacy:
    r"""VideoPrivacy
    The video's privacy setting.
    """
    
    add: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('add') }})
    comments: VideoPrivacyCommentsEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    download: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('download') }})
    embed: VideoPrivacyEmbedEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed') }})
    view: VideoPrivacyViewEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('view') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoSpatialDirectorTimeline:
    pitch: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pitch') }})
    roll: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roll') }})
    time_code: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_code') }})
    yaw: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yaw') }})
    
class VideoSpatialProjectionEnum(str, Enum):
    CUBICAL = "cubical"
    CYLINDRICAL = "cylindrical"
    DOME = "dome"
    EQUIRECTANGULAR = "equirectangular"
    PYRAMID = "pyramid"

class VideoSpatialStereoFormatEnum(str, Enum):
    LEFT_RIGHT = "left-right"
    MONO = "mono"
    TOP_BOTTOM = "top-bottom"


@dataclass_json
@dataclasses.dataclass
class VideoSpatial:
    r"""VideoSpatial
    360 spatial data.
    """
    
    director_timeline: list[VideoSpatialDirectorTimeline] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('director_timeline') }})
    field_of_view: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('field_of_view') }})
    projection: VideoSpatialProjectionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('projection') }})
    stereo_format: VideoSpatialStereoFormatEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stereo_format') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoStats:
    r"""VideoStats
    A collection of stats associated with this video.
    """
    
    plays: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('plays') }})
    
class VideoStatusEnum(str, Enum):
    AVAILABLE = "available"
    QUOTA_EXCEEDED = "quota_exceeded"
    TOTAL_CAP_EXCEEDED = "total_cap_exceeded"
    TRANSCODE_STARTING = "transcode_starting"
    TRANSCODING = "transcoding"
    TRANSCODING_ERROR = "transcoding_error"
    UNAVAILABLE = "unavailable"
    UPLOADING = "uploading"
    UPLOADING_ERROR = "uploading_error"

class VideoTranscodeStatusEnum(str, Enum):
    COMPLETE = "complete"
    ERROR = "error"
    IN_PROGRESS = "in_progress"


@dataclass_json
@dataclasses.dataclass
class VideoTranscode:
    r"""VideoTranscode
    The transcode information for a video upload.
    """
    
    status: Optional[VideoTranscodeStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
class VideoUploadApproachEnum(str, Enum):
    POST = "post"
    PULL = "pull"
    STREAMING = "streaming"
    TUS = "tus"

class VideoUploadStatusEnum(str, Enum):
    COMPLETE = "complete"
    ERROR = "error"
    IN_PROGRESS = "in_progress"


@dataclass_json
@dataclasses.dataclass
class VideoUpload:
    r"""VideoUpload
    The upload information for this video.
    """
    
    status: VideoUploadStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    approach: Optional[VideoUploadApproachEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approach') }})
    complete_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('complete_uri') }})
    form: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('form') }})
    link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    redirect_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirect_url') }})
    size: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    upload_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upload_link') }})
    
class VideoUserAccountEnum(str, Enum):
    BASIC = "basic"
    BUSINESS = "business"
    LIVE_BUSINESS = "live_business"
    LIVE_PREMIUM = "live_premium"
    LIVE_PRO = "live_pro"
    PLUS = "plus"
    PRO = "pro"
    PRO_UNLIMITED = "pro_unlimited"
    PRODUCER = "producer"


@dataclass_json
@dataclasses.dataclass
class VideoUserMetadataConnectionsAlbums:
    r"""VideoUserMetadataConnectionsAlbums
    Information about the albums created by this user.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoUserMetadataConnectionsAppearances:
    r"""VideoUserMetadataConnectionsAppearances
    Information about the appearances of this user in other videos.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoUserMetadataConnectionsBlock:
    r"""VideoUserMetadataConnectionsBlock
    Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoUserMetadataConnectionsCategories:
    r"""VideoUserMetadataConnectionsCategories
    Information about this user's followed categories.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoUserMetadataConnectionsChannels:
    r"""VideoUserMetadataConnectionsChannels
    Information about this user's subscribed channels.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoUserMetadataConnectionsFeed:
    r"""VideoUserMetadataConnectionsFeed
    Information about this user's feed.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoUserMetadataConnectionsFolders:
    r"""VideoUserMetadataConnectionsFolders
    Information about this user's folders.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoUserMetadataConnectionsFollowers:
    r"""VideoUserMetadataConnectionsFollowers
    Information about the user's followers.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoUserMetadataConnectionsFollowing:
    r"""VideoUserMetadataConnectionsFollowing
    Information about the users that the current user is following.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoUserMetadataConnectionsGroups:
    r"""VideoUserMetadataConnectionsGroups
    Information about the groups created by this user.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoUserMetadataConnectionsLikes:
    r"""VideoUserMetadataConnectionsLikes
    Information about the videos that this user has liked.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoUserMetadataConnectionsModeratedChannels:
    r"""VideoUserMetadataConnectionsModeratedChannels
    Information about the channels that this user moderates.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoUserMetadataConnectionsPictures:
    r"""VideoUserMetadataConnectionsPictures
    Information about this user's portraits.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoUserMetadataConnectionsPortfolios:
    r"""VideoUserMetadataConnectionsPortfolios
    Information about this user's portfolios.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoUserMetadataConnectionsRecommendedChannels:
    r"""VideoUserMetadataConnectionsRecommendedChannels
    A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoUserMetadataConnectionsRecommendedUsers:
    r"""VideoUserMetadataConnectionsRecommendedUsers
    A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoUserMetadataConnectionsShared:
    r"""VideoUserMetadataConnectionsShared
    Information about the videos that have been shared with this user.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoUserMetadataConnectionsVideos:
    r"""VideoUserMetadataConnectionsVideos
    Information about the videos uploaded by this user.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoUserMetadataConnectionsWatchedVideos:
    r"""VideoUserMetadataConnectionsWatchedVideos
    Information about the videos that this user has watched.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoUserMetadataConnectionsWatchlater:
    r"""VideoUserMetadataConnectionsWatchlater
    Information about the videos that this user wants to watch later.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoUserMetadataConnections:
    r"""VideoUserMetadataConnections
    The list of resource URIs related to the user.
    """
    
    albums: VideoUserMetadataConnectionsAlbums = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('albums') }})
    appearances: VideoUserMetadataConnectionsAppearances = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('appearances') }})
    block: VideoUserMetadataConnectionsBlock = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('block') }})
    categories: VideoUserMetadataConnectionsCategories = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    channels: VideoUserMetadataConnectionsChannels = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channels') }})
    feed: VideoUserMetadataConnectionsFeed = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('feed') }})
    folders: VideoUserMetadataConnectionsFolders = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('folders') }})
    followers: VideoUserMetadataConnectionsFollowers = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('followers') }})
    following: VideoUserMetadataConnectionsFollowing = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('following') }})
    groups: VideoUserMetadataConnectionsGroups = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    likes: VideoUserMetadataConnectionsLikes = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('likes') }})
    moderated_channels: VideoUserMetadataConnectionsModeratedChannels = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('moderated_channels') }})
    pictures: VideoUserMetadataConnectionsPictures = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictures') }})
    portfolios: VideoUserMetadataConnectionsPortfolios = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    recommended_channels: VideoUserMetadataConnectionsRecommendedChannels = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommended_channels') }})
    recommended_users: VideoUserMetadataConnectionsRecommendedUsers = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommended_users') }})
    shared: VideoUserMetadataConnectionsShared = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shared') }})
    videos: VideoUserMetadataConnectionsVideos = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    watched_videos: VideoUserMetadataConnectionsWatchedVideos = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('watched_videos') }})
    watchlater: VideoUserMetadataConnectionsWatchlater = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchlater') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoUserMetadataInteractionsAddPrivacyUser:
    options: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoUserMetadataInteractionsBlock:
    r"""VideoUserMetadataInteractionsBlock
    Information related to the block status of this user.
    """
    
    added: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    added_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_time') }})
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoUserMetadataInteractionsFollow:
    r"""VideoUserMetadataInteractionsFollow
    Information related to the followed status of this user.
    """
    
    added: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoUserMetadataInteractionsReport:
    r"""VideoUserMetadataInteractionsReport
    Information regarding where and how to report a user.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    reason: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoUserMetadataInteractions:
    block: VideoUserMetadataInteractionsBlock = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('block') }})
    follow: VideoUserMetadataInteractionsFollow = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('follow') }})
    report: VideoUserMetadataInteractionsReport = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('report') }})
    add_privacy_user: Optional[VideoUserMetadataInteractionsAddPrivacyUser] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add_privacy_user') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoUserMetadata:
    r"""VideoUserMetadata
    The user's metadata.
    """
    
    connections: VideoUserMetadataConnections = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    interactions: VideoUserMetadataInteractions = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactions') }})
    
class VideoUserPreferencesVideosPrivacyCommentsEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    NOBODY = "nobody"

class VideoUserPreferencesVideosPrivacyEmbedEnum(str, Enum):
    PRIVATE = "private"
    PUBLIC = "public"
    WHITELIST = "whitelist"

class VideoUserPreferencesVideosPrivacyViewEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    DISABLE = "disable"
    NOBODY = "nobody"
    PASSWORD = "password"
    UNLISTED = "unlisted"
    USERS = "users"


@dataclass_json
@dataclasses.dataclass
class VideoUserPreferencesVideosPrivacy:
    add: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add') }})
    comments: Optional[VideoUserPreferencesVideosPrivacyCommentsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    download: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download') }})
    embed: Optional[VideoUserPreferencesVideosPrivacyEmbedEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed') }})
    view: Optional[VideoUserPreferencesVideosPrivacyViewEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('view') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoUserPreferencesVideos:
    privacy: Optional[VideoUserPreferencesVideosPrivacy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoUserPreferences:
    videos: Optional[VideoUserPreferencesVideos] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoUserUploadQuotaLifetime:
    r"""VideoUserUploadQuotaLifetime
    Information about the user's lifetime upload usage.
    """
    
    free: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('free') }})
    max: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    used: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('used') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoUserUploadQuotaPeriodic:
    r"""VideoUserUploadQuotaPeriodic
    Information about the user's usage for the current period.
    """
    
    free: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('free') }})
    max: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    reset_date: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reset_date') }})
    used: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('used') }})
    
class VideoUserUploadQuotaSpaceShowingEnum(str, Enum):
    LIFETIME = "lifetime"
    PERIODIC = "periodic"


@dataclass_json
@dataclasses.dataclass
class VideoUserUploadQuotaSpace:
    r"""VideoUserUploadQuotaSpace
    Information about the user's upload space remaining for the current period.
    """
    
    free: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('free') }})
    max: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    showing: VideoUserUploadQuotaSpaceShowingEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('showing') }})
    used: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('used') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoUserUploadQuota:
    r"""VideoUserUploadQuota
    Appears only when the user has upload access and is looking at their own user record.
    """
    
    lifetime: VideoUserUploadQuotaLifetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifetime') }})
    periodic: VideoUserUploadQuotaPeriodic = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('periodic') }})
    space: VideoUserUploadQuotaSpace = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('space') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoUserWebsites:
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    link: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoUser:
    r"""VideoUser
    The video owner.
    """
    
    account: VideoUserAccountEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    bio: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bio') }})
    created_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_time') }})
    link: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    location: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    metadata: VideoUserMetadata = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pictures: shared_picture.Picture = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictures') }})
    resource_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    upload_quota: VideoUserUploadQuota = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('upload_quota') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    websites: list[VideoUserWebsites] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('websites') }})
    content_filter: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_filter') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    preferences: Optional[VideoUserPreferences] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferences') }})
    

@dataclass_json
@dataclasses.dataclass
class Video:
    categories: list[shared_category.Category] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    content_rating: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_rating') }})
    context: VideoContext = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    created_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_time') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    duration: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    embed: shared_embed_settings.EmbedSettings = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed') }})
    height: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    language: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    license: VideoLicenseEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('license') }})
    link: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    metadata: VideoMetadata = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    modified_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified_time') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pictures: shared_picture.Picture = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictures') }})
    privacy: VideoPrivacy = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    release_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('release_time') }})
    resource_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    spatial: VideoSpatial = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('spatial') }})
    stats: VideoStats = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stats') }})
    status: VideoStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: list[shared_tag.Tag] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    transcode: VideoTranscode = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transcode') }})
    upload: VideoUpload = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('upload') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    user: VideoUser = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    width: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    last_user_action_event_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_user_action_event_date') }})
    parent_folder: Optional[VideoProject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent_folder') }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    
