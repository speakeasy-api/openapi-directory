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
class CommentMetadataConnectionsReplies:
    r"""CommentMetadataConnectionsReplies
    Information about this comment's replies.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class CommentMetadataConnections:
    replies: CommentMetadataConnectionsReplies = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('replies') }})
    

@dataclass_json
@dataclasses.dataclass
class CommentMetadata:
    connections: CommentMetadataConnections = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    
class CommentTypeEnum(str, Enum):
    VIDEO = "video"

class CommentUserAccountEnum(str, Enum):
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
class CommentUserMetadataConnectionsAlbums:
    r"""CommentUserMetadataConnectionsAlbums
    Information about the albums created by this user.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class CommentUserMetadataConnectionsAppearances:
    r"""CommentUserMetadataConnectionsAppearances
    Information about the appearances of this user in other videos.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class CommentUserMetadataConnectionsBlock:
    r"""CommentUserMetadataConnectionsBlock
    Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class CommentUserMetadataConnectionsCategories:
    r"""CommentUserMetadataConnectionsCategories
    Information about this user's followed categories.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class CommentUserMetadataConnectionsChannels:
    r"""CommentUserMetadataConnectionsChannels
    Information about this user's subscribed channels.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class CommentUserMetadataConnectionsFeed:
    r"""CommentUserMetadataConnectionsFeed
    Information about this user's feed.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class CommentUserMetadataConnectionsFolders:
    r"""CommentUserMetadataConnectionsFolders
    Information about this user's folders.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class CommentUserMetadataConnectionsFollowers:
    r"""CommentUserMetadataConnectionsFollowers
    Information about the user's followers.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class CommentUserMetadataConnectionsFollowing:
    r"""CommentUserMetadataConnectionsFollowing
    Information about the users that the current user is following.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class CommentUserMetadataConnectionsGroups:
    r"""CommentUserMetadataConnectionsGroups
    Information about the groups created by this user.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class CommentUserMetadataConnectionsLikes:
    r"""CommentUserMetadataConnectionsLikes
    Information about the videos that this user has liked.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class CommentUserMetadataConnectionsModeratedChannels:
    r"""CommentUserMetadataConnectionsModeratedChannels
    Information about the channels that this user moderates.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class CommentUserMetadataConnectionsPictures:
    r"""CommentUserMetadataConnectionsPictures
    Information about this user's portraits.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class CommentUserMetadataConnectionsPortfolios:
    r"""CommentUserMetadataConnectionsPortfolios
    Information about this user's portfolios.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class CommentUserMetadataConnectionsRecommendedChannels:
    r"""CommentUserMetadataConnectionsRecommendedChannels
    A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class CommentUserMetadataConnectionsRecommendedUsers:
    r"""CommentUserMetadataConnectionsRecommendedUsers
    A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class CommentUserMetadataConnectionsShared:
    r"""CommentUserMetadataConnectionsShared
    Information about the videos that have been shared with this user.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class CommentUserMetadataConnectionsVideos:
    r"""CommentUserMetadataConnectionsVideos
    Information about the videos uploaded by this user.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class CommentUserMetadataConnectionsWatchedVideos:
    r"""CommentUserMetadataConnectionsWatchedVideos
    Information about the videos that this user has watched.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class CommentUserMetadataConnectionsWatchlater:
    r"""CommentUserMetadataConnectionsWatchlater
    Information about the videos that this user wants to watch later.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class CommentUserMetadataConnections:
    r"""CommentUserMetadataConnections
    The list of resource URIs related to the user.
    """
    
    albums: CommentUserMetadataConnectionsAlbums = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('albums') }})
    appearances: CommentUserMetadataConnectionsAppearances = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('appearances') }})
    block: CommentUserMetadataConnectionsBlock = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('block') }})
    categories: CommentUserMetadataConnectionsCategories = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    channels: CommentUserMetadataConnectionsChannels = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channels') }})
    feed: CommentUserMetadataConnectionsFeed = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('feed') }})
    folders: CommentUserMetadataConnectionsFolders = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('folders') }})
    followers: CommentUserMetadataConnectionsFollowers = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('followers') }})
    following: CommentUserMetadataConnectionsFollowing = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('following') }})
    groups: CommentUserMetadataConnectionsGroups = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    likes: CommentUserMetadataConnectionsLikes = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('likes') }})
    moderated_channels: CommentUserMetadataConnectionsModeratedChannels = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('moderated_channels') }})
    pictures: CommentUserMetadataConnectionsPictures = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictures') }})
    portfolios: CommentUserMetadataConnectionsPortfolios = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    recommended_channels: CommentUserMetadataConnectionsRecommendedChannels = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommended_channels') }})
    recommended_users: CommentUserMetadataConnectionsRecommendedUsers = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommended_users') }})
    shared: CommentUserMetadataConnectionsShared = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shared') }})
    videos: CommentUserMetadataConnectionsVideos = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    watched_videos: CommentUserMetadataConnectionsWatchedVideos = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('watched_videos') }})
    watchlater: CommentUserMetadataConnectionsWatchlater = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchlater') }})
    

@dataclass_json
@dataclasses.dataclass
class CommentUserMetadataInteractionsAddPrivacyUser:
    options: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class CommentUserMetadataInteractionsBlock:
    r"""CommentUserMetadataInteractionsBlock
    Information related to the block status of this user.
    """
    
    added: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    added_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_time') }})
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class CommentUserMetadataInteractionsFollow:
    r"""CommentUserMetadataInteractionsFollow
    Information related to the followed status of this user.
    """
    
    added: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class CommentUserMetadataInteractionsReport:
    r"""CommentUserMetadataInteractionsReport
    Information regarding where and how to report a user.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    reason: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class CommentUserMetadataInteractions:
    block: CommentUserMetadataInteractionsBlock = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('block') }})
    follow: CommentUserMetadataInteractionsFollow = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('follow') }})
    report: CommentUserMetadataInteractionsReport = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('report') }})
    add_privacy_user: Optional[CommentUserMetadataInteractionsAddPrivacyUser] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add_privacy_user') }})
    

@dataclass_json
@dataclasses.dataclass
class CommentUserMetadata:
    r"""CommentUserMetadata
    The user's metadata.
    """
    
    connections: CommentUserMetadataConnections = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    interactions: CommentUserMetadataInteractions = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactions') }})
    
class CommentUserPreferencesVideosPrivacyCommentsEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    NOBODY = "nobody"

class CommentUserPreferencesVideosPrivacyEmbedEnum(str, Enum):
    PRIVATE = "private"
    PUBLIC = "public"
    WHITELIST = "whitelist"

class CommentUserPreferencesVideosPrivacyViewEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    DISABLE = "disable"
    NOBODY = "nobody"
    PASSWORD = "password"
    UNLISTED = "unlisted"
    USERS = "users"


@dataclass_json
@dataclasses.dataclass
class CommentUserPreferencesVideosPrivacy:
    add: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add') }})
    comments: Optional[CommentUserPreferencesVideosPrivacyCommentsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    download: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download') }})
    embed: Optional[CommentUserPreferencesVideosPrivacyEmbedEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed') }})
    view: Optional[CommentUserPreferencesVideosPrivacyViewEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('view') }})
    

@dataclass_json
@dataclasses.dataclass
class CommentUserPreferencesVideos:
    privacy: Optional[CommentUserPreferencesVideosPrivacy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    

@dataclass_json
@dataclasses.dataclass
class CommentUserPreferences:
    videos: Optional[CommentUserPreferencesVideos] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    

@dataclass_json
@dataclasses.dataclass
class CommentUserUploadQuotaLifetime:
    r"""CommentUserUploadQuotaLifetime
    Information about the user's lifetime upload usage.
    """
    
    free: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('free') }})
    max: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    used: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('used') }})
    

@dataclass_json
@dataclasses.dataclass
class CommentUserUploadQuotaPeriodic:
    r"""CommentUserUploadQuotaPeriodic
    Information about the user's usage for the current period.
    """
    
    free: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('free') }})
    max: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    reset_date: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reset_date') }})
    used: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('used') }})
    
class CommentUserUploadQuotaSpaceShowingEnum(str, Enum):
    LIFETIME = "lifetime"
    PERIODIC = "periodic"


@dataclass_json
@dataclasses.dataclass
class CommentUserUploadQuotaSpace:
    r"""CommentUserUploadQuotaSpace
    Information about the user's upload space remaining for the current period.
    """
    
    free: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('free') }})
    max: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    showing: CommentUserUploadQuotaSpaceShowingEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('showing') }})
    used: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('used') }})
    

@dataclass_json
@dataclasses.dataclass
class CommentUserUploadQuota:
    r"""CommentUserUploadQuota
    Appears only when the user has upload access and is looking at their own user record.
    """
    
    lifetime: CommentUserUploadQuotaLifetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifetime') }})
    periodic: CommentUserUploadQuotaPeriodic = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('periodic') }})
    space: CommentUserUploadQuotaSpace = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('space') }})
    

@dataclass_json
@dataclasses.dataclass
class CommentUserWebsites:
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    link: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class CommentUser:
    r"""CommentUser
    The user who posted the comment.
    """
    
    account: CommentUserAccountEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    bio: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bio') }})
    created_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_time') }})
    link: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    location: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    metadata: CommentUserMetadata = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pictures: shared_picture.Picture = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictures') }})
    resource_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    upload_quota: CommentUserUploadQuota = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('upload_quota') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    websites: list[CommentUserWebsites] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('websites') }})
    content_filter: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_filter') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    preferences: Optional[CommentUserPreferences] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferences') }})
    

@dataclass_json
@dataclasses.dataclass
class Comment:
    created_on: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_on') }})
    metadata: CommentMetadata = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    resource_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    text: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    type: CommentTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    user: CommentUser = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
