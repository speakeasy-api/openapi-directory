import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import picture as shared_picture


@dataclass_json
@dataclasses.dataclass
class OnDemandSeasonMetadataConnectionsVideos:
    r"""OnDemandSeasonMetadataConnectionsVideos
    The Videos connection.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandSeasonMetadataConnections:
    videos: OnDemandSeasonMetadataConnectionsVideos = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandSeasonMetadata:
    connections: OnDemandSeasonMetadataConnections = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    
class OnDemandSeasonUserAccountEnum(str, Enum):
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
class OnDemandSeasonUserMetadataConnectionsAlbums:
    r"""OnDemandSeasonUserMetadataConnectionsAlbums
    Information about the albums created by this user.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandSeasonUserMetadataConnectionsAppearances:
    r"""OnDemandSeasonUserMetadataConnectionsAppearances
    Information about the appearances of this user in other videos.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandSeasonUserMetadataConnectionsBlock:
    r"""OnDemandSeasonUserMetadataConnectionsBlock
    Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandSeasonUserMetadataConnectionsCategories:
    r"""OnDemandSeasonUserMetadataConnectionsCategories
    Information about this user's followed categories.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandSeasonUserMetadataConnectionsChannels:
    r"""OnDemandSeasonUserMetadataConnectionsChannels
    Information about this user's subscribed channels.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandSeasonUserMetadataConnectionsFeed:
    r"""OnDemandSeasonUserMetadataConnectionsFeed
    Information about this user's feed.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandSeasonUserMetadataConnectionsFolders:
    r"""OnDemandSeasonUserMetadataConnectionsFolders
    Information about this user's folders.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandSeasonUserMetadataConnectionsFollowers:
    r"""OnDemandSeasonUserMetadataConnectionsFollowers
    Information about the user's followers.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandSeasonUserMetadataConnectionsFollowing:
    r"""OnDemandSeasonUserMetadataConnectionsFollowing
    Information about the users that the current user is following.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandSeasonUserMetadataConnectionsGroups:
    r"""OnDemandSeasonUserMetadataConnectionsGroups
    Information about the groups created by this user.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandSeasonUserMetadataConnectionsLikes:
    r"""OnDemandSeasonUserMetadataConnectionsLikes
    Information about the videos that this user has liked.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandSeasonUserMetadataConnectionsModeratedChannels:
    r"""OnDemandSeasonUserMetadataConnectionsModeratedChannels
    Information about the channels that this user moderates.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandSeasonUserMetadataConnectionsPictures:
    r"""OnDemandSeasonUserMetadataConnectionsPictures
    Information about this user's portraits.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandSeasonUserMetadataConnectionsPortfolios:
    r"""OnDemandSeasonUserMetadataConnectionsPortfolios
    Information about this user's portfolios.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandSeasonUserMetadataConnectionsRecommendedChannels:
    r"""OnDemandSeasonUserMetadataConnectionsRecommendedChannels
    A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandSeasonUserMetadataConnectionsRecommendedUsers:
    r"""OnDemandSeasonUserMetadataConnectionsRecommendedUsers
    A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandSeasonUserMetadataConnectionsShared:
    r"""OnDemandSeasonUserMetadataConnectionsShared
    Information about the videos that have been shared with this user.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandSeasonUserMetadataConnectionsVideos:
    r"""OnDemandSeasonUserMetadataConnectionsVideos
    Information about the videos uploaded by this user.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandSeasonUserMetadataConnectionsWatchedVideos:
    r"""OnDemandSeasonUserMetadataConnectionsWatchedVideos
    Information about the videos that this user has watched.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandSeasonUserMetadataConnectionsWatchlater:
    r"""OnDemandSeasonUserMetadataConnectionsWatchlater
    Information about the videos that this user wants to watch later.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandSeasonUserMetadataConnections:
    r"""OnDemandSeasonUserMetadataConnections
    The list of resource URIs related to the user.
    """
    
    albums: OnDemandSeasonUserMetadataConnectionsAlbums = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('albums') }})
    appearances: OnDemandSeasonUserMetadataConnectionsAppearances = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('appearances') }})
    block: OnDemandSeasonUserMetadataConnectionsBlock = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('block') }})
    categories: OnDemandSeasonUserMetadataConnectionsCategories = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    channels: OnDemandSeasonUserMetadataConnectionsChannels = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channels') }})
    feed: OnDemandSeasonUserMetadataConnectionsFeed = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('feed') }})
    folders: OnDemandSeasonUserMetadataConnectionsFolders = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('folders') }})
    followers: OnDemandSeasonUserMetadataConnectionsFollowers = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('followers') }})
    following: OnDemandSeasonUserMetadataConnectionsFollowing = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('following') }})
    groups: OnDemandSeasonUserMetadataConnectionsGroups = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    likes: OnDemandSeasonUserMetadataConnectionsLikes = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('likes') }})
    moderated_channels: OnDemandSeasonUserMetadataConnectionsModeratedChannels = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('moderated_channels') }})
    pictures: OnDemandSeasonUserMetadataConnectionsPictures = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictures') }})
    portfolios: OnDemandSeasonUserMetadataConnectionsPortfolios = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    recommended_channels: OnDemandSeasonUserMetadataConnectionsRecommendedChannels = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommended_channels') }})
    recommended_users: OnDemandSeasonUserMetadataConnectionsRecommendedUsers = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommended_users') }})
    shared: OnDemandSeasonUserMetadataConnectionsShared = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shared') }})
    videos: OnDemandSeasonUserMetadataConnectionsVideos = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    watched_videos: OnDemandSeasonUserMetadataConnectionsWatchedVideos = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('watched_videos') }})
    watchlater: OnDemandSeasonUserMetadataConnectionsWatchlater = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchlater') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandSeasonUserMetadataInteractionsAddPrivacyUser:
    options: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandSeasonUserMetadataInteractionsBlock:
    r"""OnDemandSeasonUserMetadataInteractionsBlock
    Information related to the block status of this user.
    """
    
    added: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    added_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_time') }})
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandSeasonUserMetadataInteractionsFollow:
    r"""OnDemandSeasonUserMetadataInteractionsFollow
    Information related to the followed status of this user.
    """
    
    added: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandSeasonUserMetadataInteractionsReport:
    r"""OnDemandSeasonUserMetadataInteractionsReport
    Information regarding where and how to report a user.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    reason: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandSeasonUserMetadataInteractions:
    block: OnDemandSeasonUserMetadataInteractionsBlock = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('block') }})
    follow: OnDemandSeasonUserMetadataInteractionsFollow = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('follow') }})
    report: OnDemandSeasonUserMetadataInteractionsReport = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('report') }})
    add_privacy_user: Optional[OnDemandSeasonUserMetadataInteractionsAddPrivacyUser] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add_privacy_user') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandSeasonUserMetadata:
    r"""OnDemandSeasonUserMetadata
    The user's metadata.
    """
    
    connections: OnDemandSeasonUserMetadataConnections = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    interactions: OnDemandSeasonUserMetadataInteractions = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactions') }})
    
class OnDemandSeasonUserPreferencesVideosPrivacyCommentsEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    NOBODY = "nobody"

class OnDemandSeasonUserPreferencesVideosPrivacyEmbedEnum(str, Enum):
    PRIVATE = "private"
    PUBLIC = "public"
    WHITELIST = "whitelist"

class OnDemandSeasonUserPreferencesVideosPrivacyViewEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    DISABLE = "disable"
    NOBODY = "nobody"
    PASSWORD = "password"
    UNLISTED = "unlisted"
    USERS = "users"


@dataclass_json
@dataclasses.dataclass
class OnDemandSeasonUserPreferencesVideosPrivacy:
    add: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add') }})
    comments: Optional[OnDemandSeasonUserPreferencesVideosPrivacyCommentsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    download: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download') }})
    embed: Optional[OnDemandSeasonUserPreferencesVideosPrivacyEmbedEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed') }})
    view: Optional[OnDemandSeasonUserPreferencesVideosPrivacyViewEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('view') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandSeasonUserPreferencesVideos:
    privacy: Optional[OnDemandSeasonUserPreferencesVideosPrivacy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandSeasonUserPreferences:
    videos: Optional[OnDemandSeasonUserPreferencesVideos] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandSeasonUserUploadQuotaLifetime:
    r"""OnDemandSeasonUserUploadQuotaLifetime
    Information about the user's lifetime upload usage.
    """
    
    free: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('free') }})
    max: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    used: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('used') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandSeasonUserUploadQuotaPeriodic:
    r"""OnDemandSeasonUserUploadQuotaPeriodic
    Information about the user's usage for the current period.
    """
    
    free: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('free') }})
    max: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    reset_date: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reset_date') }})
    used: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('used') }})
    
class OnDemandSeasonUserUploadQuotaSpaceShowingEnum(str, Enum):
    LIFETIME = "lifetime"
    PERIODIC = "periodic"


@dataclass_json
@dataclasses.dataclass
class OnDemandSeasonUserUploadQuotaSpace:
    r"""OnDemandSeasonUserUploadQuotaSpace
    Information about the user's upload space remaining for the current period.
    """
    
    free: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('free') }})
    max: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    showing: OnDemandSeasonUserUploadQuotaSpaceShowingEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('showing') }})
    used: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('used') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandSeasonUserUploadQuota:
    r"""OnDemandSeasonUserUploadQuota
    Appears only when the user has upload access and is looking at their own user record.
    """
    
    lifetime: OnDemandSeasonUserUploadQuotaLifetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifetime') }})
    periodic: OnDemandSeasonUserUploadQuotaPeriodic = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('periodic') }})
    space: OnDemandSeasonUserUploadQuotaSpace = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('space') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandSeasonUserWebsites:
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    link: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandSeasonUser:
    r"""OnDemandSeasonUser
    The creator of this On Demand page.
    """
    
    account: OnDemandSeasonUserAccountEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    bio: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bio') }})
    created_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_time') }})
    link: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    location: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    metadata: OnDemandSeasonUserMetadata = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pictures: shared_picture.Picture = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictures') }})
    resource_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    upload_quota: OnDemandSeasonUserUploadQuota = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('upload_quota') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    websites: list[OnDemandSeasonUserWebsites] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('websites') }})
    content_filter: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_filter') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    preferences: Optional[OnDemandSeasonUserPreferences] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferences') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandSeason:
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    metadata: OnDemandSeasonMetadata = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    position: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    resource_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    user: OnDemandSeasonUser = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
