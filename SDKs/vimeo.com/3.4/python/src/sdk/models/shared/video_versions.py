import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import picture as shared_picture
from ..shared import api_app as shared_api_app
from ..shared import play as shared_play


@dataclass_json
@dataclasses.dataclass
class VideoVersionsMetadataConnectionsVideo:
    r"""VideoVersionsMetadataConnectionsVideo
    Data from video associated with version
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoVersionsMetadataConnections:
    video: VideoVersionsMetadataConnectionsVideo = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('video') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoVersionsMetadata:
    r"""VideoVersionsMetadata
    The video version's metadata.
    """
    
    connections: VideoVersionsMetadataConnections = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    
class VideoVersionsUploadApproachEnum(str, Enum):
    POST = "post"
    PULL = "pull"
    STREAMING = "streaming"
    TUS = "tus"

class VideoVersionsUploadStatusEnum(str, Enum):
    COMPLETE = "complete"
    ERROR = "error"
    IN_PROGRESS = "in_progress"


@dataclass_json
@dataclasses.dataclass
class VideoVersionsUpload:
    r"""VideoVersionsUpload
    The upload information for this version.
    """
    
    status: VideoVersionsUploadStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    approach: Optional[VideoVersionsUploadApproachEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approach') }})
    complete_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('complete_uri') }})
    form: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('form') }})
    link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    redirect_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirect_url') }})
    size: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    upload_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upload_link') }})
    
class VideoVersionsUserAccountEnum(str, Enum):
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
class VideoVersionsUserMetadataConnectionsAlbums:
    r"""VideoVersionsUserMetadataConnectionsAlbums
    Information about the albums created by this user.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoVersionsUserMetadataConnectionsAppearances:
    r"""VideoVersionsUserMetadataConnectionsAppearances
    Information about the appearances of this user in other videos.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoVersionsUserMetadataConnectionsBlock:
    r"""VideoVersionsUserMetadataConnectionsBlock
    Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoVersionsUserMetadataConnectionsCategories:
    r"""VideoVersionsUserMetadataConnectionsCategories
    Information about this user's followed categories.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoVersionsUserMetadataConnectionsChannels:
    r"""VideoVersionsUserMetadataConnectionsChannels
    Information about this user's subscribed channels.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoVersionsUserMetadataConnectionsFeed:
    r"""VideoVersionsUserMetadataConnectionsFeed
    Information about this user's feed.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoVersionsUserMetadataConnectionsFolders:
    r"""VideoVersionsUserMetadataConnectionsFolders
    Information about this user's folders.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoVersionsUserMetadataConnectionsFollowers:
    r"""VideoVersionsUserMetadataConnectionsFollowers
    Information about the user's followers.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoVersionsUserMetadataConnectionsFollowing:
    r"""VideoVersionsUserMetadataConnectionsFollowing
    Information about the users that the current user is following.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoVersionsUserMetadataConnectionsGroups:
    r"""VideoVersionsUserMetadataConnectionsGroups
    Information about the groups created by this user.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoVersionsUserMetadataConnectionsLikes:
    r"""VideoVersionsUserMetadataConnectionsLikes
    Information about the videos that this user has liked.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoVersionsUserMetadataConnectionsModeratedChannels:
    r"""VideoVersionsUserMetadataConnectionsModeratedChannels
    Information about the channels that this user moderates.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoVersionsUserMetadataConnectionsPictures:
    r"""VideoVersionsUserMetadataConnectionsPictures
    Information about this user's portraits.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoVersionsUserMetadataConnectionsPortfolios:
    r"""VideoVersionsUserMetadataConnectionsPortfolios
    Information about this user's portfolios.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoVersionsUserMetadataConnectionsRecommendedChannels:
    r"""VideoVersionsUserMetadataConnectionsRecommendedChannels
    A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoVersionsUserMetadataConnectionsRecommendedUsers:
    r"""VideoVersionsUserMetadataConnectionsRecommendedUsers
    A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoVersionsUserMetadataConnectionsShared:
    r"""VideoVersionsUserMetadataConnectionsShared
    Information about the videos that have been shared with this user.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoVersionsUserMetadataConnectionsVideos:
    r"""VideoVersionsUserMetadataConnectionsVideos
    Information about the videos uploaded by this user.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoVersionsUserMetadataConnectionsWatchedVideos:
    r"""VideoVersionsUserMetadataConnectionsWatchedVideos
    Information about the videos that this user has watched.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoVersionsUserMetadataConnectionsWatchlater:
    r"""VideoVersionsUserMetadataConnectionsWatchlater
    Information about the videos that this user wants to watch later.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoVersionsUserMetadataConnections:
    r"""VideoVersionsUserMetadataConnections
    The list of resource URIs related to the user.
    """
    
    albums: VideoVersionsUserMetadataConnectionsAlbums = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('albums') }})
    appearances: VideoVersionsUserMetadataConnectionsAppearances = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('appearances') }})
    block: VideoVersionsUserMetadataConnectionsBlock = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('block') }})
    categories: VideoVersionsUserMetadataConnectionsCategories = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    channels: VideoVersionsUserMetadataConnectionsChannels = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channels') }})
    feed: VideoVersionsUserMetadataConnectionsFeed = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('feed') }})
    folders: VideoVersionsUserMetadataConnectionsFolders = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('folders') }})
    followers: VideoVersionsUserMetadataConnectionsFollowers = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('followers') }})
    following: VideoVersionsUserMetadataConnectionsFollowing = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('following') }})
    groups: VideoVersionsUserMetadataConnectionsGroups = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    likes: VideoVersionsUserMetadataConnectionsLikes = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('likes') }})
    moderated_channels: VideoVersionsUserMetadataConnectionsModeratedChannels = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('moderated_channels') }})
    pictures: VideoVersionsUserMetadataConnectionsPictures = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictures') }})
    portfolios: VideoVersionsUserMetadataConnectionsPortfolios = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    recommended_channels: VideoVersionsUserMetadataConnectionsRecommendedChannels = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommended_channels') }})
    recommended_users: VideoVersionsUserMetadataConnectionsRecommendedUsers = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommended_users') }})
    shared: VideoVersionsUserMetadataConnectionsShared = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shared') }})
    videos: VideoVersionsUserMetadataConnectionsVideos = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    watched_videos: VideoVersionsUserMetadataConnectionsWatchedVideos = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('watched_videos') }})
    watchlater: VideoVersionsUserMetadataConnectionsWatchlater = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchlater') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoVersionsUserMetadataInteractionsAddPrivacyUser:
    options: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoVersionsUserMetadataInteractionsBlock:
    r"""VideoVersionsUserMetadataInteractionsBlock
    Information related to the block status of this user.
    """
    
    added: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    added_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_time') }})
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoVersionsUserMetadataInteractionsFollow:
    r"""VideoVersionsUserMetadataInteractionsFollow
    Information related to the followed status of this user.
    """
    
    added: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoVersionsUserMetadataInteractionsReport:
    r"""VideoVersionsUserMetadataInteractionsReport
    Information regarding where and how to report a user.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    reason: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoVersionsUserMetadataInteractions:
    block: VideoVersionsUserMetadataInteractionsBlock = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('block') }})
    follow: VideoVersionsUserMetadataInteractionsFollow = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('follow') }})
    report: VideoVersionsUserMetadataInteractionsReport = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('report') }})
    add_privacy_user: Optional[VideoVersionsUserMetadataInteractionsAddPrivacyUser] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add_privacy_user') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoVersionsUserMetadata:
    r"""VideoVersionsUserMetadata
    The user's metadata.
    """
    
    connections: VideoVersionsUserMetadataConnections = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    interactions: VideoVersionsUserMetadataInteractions = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactions') }})
    
class VideoVersionsUserPreferencesVideosPrivacyCommentsEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    NOBODY = "nobody"

class VideoVersionsUserPreferencesVideosPrivacyEmbedEnum(str, Enum):
    PRIVATE = "private"
    PUBLIC = "public"
    WHITELIST = "whitelist"

class VideoVersionsUserPreferencesVideosPrivacyViewEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    DISABLE = "disable"
    NOBODY = "nobody"
    PASSWORD = "password"
    UNLISTED = "unlisted"
    USERS = "users"


@dataclass_json
@dataclasses.dataclass
class VideoVersionsUserPreferencesVideosPrivacy:
    add: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add') }})
    comments: Optional[VideoVersionsUserPreferencesVideosPrivacyCommentsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    download: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download') }})
    embed: Optional[VideoVersionsUserPreferencesVideosPrivacyEmbedEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed') }})
    view: Optional[VideoVersionsUserPreferencesVideosPrivacyViewEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('view') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoVersionsUserPreferencesVideos:
    privacy: Optional[VideoVersionsUserPreferencesVideosPrivacy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoVersionsUserPreferences:
    videos: Optional[VideoVersionsUserPreferencesVideos] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoVersionsUserUploadQuotaLifetime:
    r"""VideoVersionsUserUploadQuotaLifetime
    Information about the user's lifetime upload usage.
    """
    
    free: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('free') }})
    max: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    used: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('used') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoVersionsUserUploadQuotaPeriodic:
    r"""VideoVersionsUserUploadQuotaPeriodic
    Information about the user's usage for the current period.
    """
    
    free: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('free') }})
    max: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    reset_date: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reset_date') }})
    used: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('used') }})
    
class VideoVersionsUserUploadQuotaSpaceShowingEnum(str, Enum):
    LIFETIME = "lifetime"
    PERIODIC = "periodic"


@dataclass_json
@dataclasses.dataclass
class VideoVersionsUserUploadQuotaSpace:
    r"""VideoVersionsUserUploadQuotaSpace
    Information about the user's upload space remaining for the current period.
    """
    
    free: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('free') }})
    max: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    showing: VideoVersionsUserUploadQuotaSpaceShowingEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('showing') }})
    used: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('used') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoVersionsUserUploadQuota:
    r"""VideoVersionsUserUploadQuota
    Appears only when the user has upload access and is looking at their own user record.
    """
    
    lifetime: VideoVersionsUserUploadQuotaLifetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifetime') }})
    periodic: VideoVersionsUserUploadQuotaPeriodic = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('periodic') }})
    space: VideoVersionsUserUploadQuotaSpace = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('space') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoVersionsUserWebsites:
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    link: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoVersionsUser:
    r"""VideoVersionsUser
    The owner of the video version.
    """
    
    account: VideoVersionsUserAccountEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    bio: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bio') }})
    created_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_time') }})
    link: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    location: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    metadata: VideoVersionsUserMetadata = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pictures: shared_picture.Picture = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictures') }})
    resource_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    upload_quota: VideoVersionsUserUploadQuota = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('upload_quota') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    websites: list[VideoVersionsUserWebsites] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('websites') }})
    content_filter: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_filter') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    preferences: Optional[VideoVersionsUserPreferences] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferences') }})
    

@dataclass_json
@dataclasses.dataclass
class VideoVersions:
    active: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    app: shared_api_app.APIApp = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('app') }})
    created_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_time') }})
    duration: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    filename: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filename') }})
    filesize: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filesize') }})
    metadata: VideoVersionsMetadata = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    modified_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified_time') }})
    play: shared_play.Play = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('play') }})
    upload: VideoVersionsUpload = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('upload') }})
    upload_date: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('upload_date') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    user: VideoVersionsUser = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
