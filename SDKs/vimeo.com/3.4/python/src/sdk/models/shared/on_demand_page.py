import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import purchase_interaction as shared_purchase_interaction
from ..shared import user as shared_user
from ..shared import picture as shared_picture
from ..shared import category as shared_category
from ..shared import embed_settings as shared_embed_settings
from ..shared import tag as shared_tag
from ..shared import video as shared_video
from ..shared import on_demand_genre as shared_on_demand_genre


@dataclass_json
@dataclasses.dataclass
class OnDemandPagePictureSizes:
    height: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    link: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    width: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    link_with_play_button: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link_with_play_button') }})
    
class OnDemandPagePictureTypeEnum(str, Enum):
    CAUTION = "caution"
    CUSTOM = "custom"
    DEFAULT = "default"


@dataclass_json
@dataclasses.dataclass
class OnDemandPagePicture:
    r"""OnDemandPagePicture
    The background image for the On Demand page on Vimeo.
    """
    
    active: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    resource_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    sizes: list[OnDemandPagePictureSizes] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizes') }})
    type: OnDemandPagePictureTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageColors:
    r"""OnDemandPageColors
    The primary and secondary colors used for rendering this On Demand page.
    """
    
    primary: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary') }})
    secondary: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondary') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageEpisodesBuy:
    active: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    price: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    
class OnDemandPageEpisodesRentPeriodEnum(str, Enum):
    ONE_DAY = "1 day"
    ONE_MONTH = "1 month"
    ONE_WEEK = "1 week"
    ONE_YEAR = "1 year"
    TWO_DAY = "2 day"
    TWENTY_FOUR_HOUR = "24 hour"
    THREE_DAY = "3 day"
    THREE_MONTH = "3 month"
    THIRTY_DAY = "30 day"
    FORTY_EIGHT_HOUR = "48 hour"
    SIX_MONTH = "6 month"
    SIXTY_DAY = "60 day"
    SEVEN_DAY = "7 day"
    SEVENTY_TWO_HOUR = "72 hour"


@dataclass_json
@dataclasses.dataclass
class OnDemandPageEpisodesRent:
    active: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    period: OnDemandPageEpisodesRentPeriodEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    price: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageEpisodes:
    r"""OnDemandPageEpisodes
    Information about this On Demand page's episodes, if the page is for a series.
    """
    
    buy: OnDemandPageEpisodesBuy = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('buy') }})
    rent: OnDemandPageEpisodesRent = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rent') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageMetadataConnectionsMetadataConnectionsComments:
    r"""OnDemandPageMetadataConnectionsMetadataConnectionsComments
    Information about the comments associated with this page.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageMetadataConnectionsMetadataConnectionsGenres:
    r"""OnDemandPageMetadataConnectionsMetadataConnectionsGenres
    Information about the genres associated with this page.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageMetadataConnectionsMetadataConnectionsLikes:
    r"""OnDemandPageMetadataConnectionsMetadataConnectionsLikes
    Information about the likes associated with this page.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageMetadataConnectionsMetadataConnectionsPictures:
    r"""OnDemandPageMetadataConnectionsMetadataConnectionsPictures
    Information about the pictures associated with this page.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageMetadataConnectionsMetadataConnectionsSeasons:
    r"""OnDemandPageMetadataConnectionsMetadataConnectionsSeasons
    Information about the seasons associated with this page.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageMetadataConnectionsMetadataConnectionsVideos:
    r"""OnDemandPageMetadataConnectionsMetadataConnectionsVideos
    Information about the videos associated with this page.
    """
    
    extra_total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('extra_total') }})
    main_total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('main_total') }})
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    viewable_total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewable_total') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageMetadataConnectionsMetadataConnections:
    comments: OnDemandPageMetadataConnectionsMetadataConnectionsComments = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    genres: OnDemandPageMetadataConnectionsMetadataConnectionsGenres = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('genres') }})
    likes: OnDemandPageMetadataConnectionsMetadataConnectionsLikes = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('likes') }})
    pictures: OnDemandPageMetadataConnectionsMetadataConnectionsPictures = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictures') }})
    seasons: OnDemandPageMetadataConnectionsMetadataConnectionsSeasons = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('seasons') }})
    videos: OnDemandPageMetadataConnectionsMetadataConnectionsVideos = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageMetadataConnectionsMetadata:
    connections: OnDemandPageMetadataConnectionsMetadataConnections = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageMetadataConnections:
    r"""OnDemandPageMetadataConnections
    A collection of information that is connected to this resource, including videos, genres, and pictures connections.
    """
    
    metadata: OnDemandPageMetadataConnectionsMetadata = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageMetadata:
    r"""OnDemandPageMetadata
    Metadata about the On Demand page.
    """
    
    connections: OnDemandPageMetadataConnections = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    interactions: shared_purchase_interaction.PurchaseInteraction = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactions') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPagePreorder:
    active: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    cancel_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancel_time') }})
    publish_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('publish_time') }})
    time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPagePublished:
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageSubscription:
    r"""OnDemandPageSubscription
    Information about subscribing to this On Demand page, if enabled.
    """
    
    active: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    link: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    price: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    period: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    
class OnDemandPageVideoContextActionEnum(str, Enum):
    ADDED_TO = "Added to"
    APPEARANCE_BY = "Appearance by"
    LIKED_BY = "Liked by"
    UPLOADED_BY = "Uploaded by"


@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoContext:
    r"""OnDemandPageVideoContext
    The context of the video's subscription, if this video is part of a subscription.
    """
    
    action: OnDemandPageVideoContextActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    resource: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    resource_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    
class OnDemandPageVideoLicenseEnum(str, Enum):
    BY = "by"
    BY_NC = "by-nc"
    BY_NC_ND = "by-nc-nd"
    BY_NC_SA = "by-nc-sa"
    BY_ND = "by-nd"
    BY_SA = "by-sa"
    CC0 = "cc0"


@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoMetadataConnectionsComments:
    r"""OnDemandPageVideoMetadataConnectionsComments
    Information about the comments on this video.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoMetadataConnectionsCredits:
    r"""OnDemandPageVideoMetadataConnectionsCredits
    Information about the users credited in this video.
    """
    
    options: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoMetadataConnectionsLikes:
    r"""OnDemandPageVideoMetadataConnectionsLikes
    Information about the users who have liked this video.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoMetadataConnectionsOndemand:
    r"""OnDemandPageVideoMetadataConnectionsOndemand
    Information about this video's ondemand data.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    resource_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoMetadataConnectionsPictures:
    r"""OnDemandPageVideoMetadataConnectionsPictures
    Information about this video's thumbnails.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoMetadataConnectionsPlayback:
    r"""OnDemandPageVideoMetadataConnectionsPlayback
    The DRM playback status connection for this video.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoMetadataConnectionsRecommendations:
    r"""OnDemandPageVideoMetadataConnectionsRecommendations
    The recommendations for this video.
    """
    
    options: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoMetadataConnectionsRelated:
    r"""OnDemandPageVideoMetadataConnectionsRelated
    Related content for this video.
    """
    
    options: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoMetadataConnectionsSeason:
    r"""OnDemandPageVideoMetadataConnectionsSeason
    Information about the video's season.
    """
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoMetadataConnectionsTexttracks:
    r"""OnDemandPageVideoMetadataConnectionsTexttracks
    Information about this video's text tracks.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoMetadataConnectionsTrailer:
    r"""OnDemandPageVideoMetadataConnectionsTrailer
    Information about this video's VOD trailer.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    resource_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoMetadataConnectionsUsersWithAccess:
    r"""OnDemandPageVideoMetadataConnectionsUsersWithAccess
    Information about the user privacy of this video, if the video privacy is `users`.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoMetadataConnectionsVersions:
    r"""OnDemandPageVideoMetadataConnectionsVersions
    Information about the versions of this video.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    current_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoMetadataConnections:
    r"""OnDemandPageVideoMetadataConnections
    A list of resource URIs related to the video.
    """
    
    comments: OnDemandPageVideoMetadataConnectionsComments = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    credits: OnDemandPageVideoMetadataConnectionsCredits = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('credits') }})
    likes: OnDemandPageVideoMetadataConnectionsLikes = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('likes') }})
    ondemand: OnDemandPageVideoMetadataConnectionsOndemand = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ondemand') }})
    pictures: OnDemandPageVideoMetadataConnectionsPictures = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictures') }})
    playback: OnDemandPageVideoMetadataConnectionsPlayback = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('playback') }})
    recommendations: OnDemandPageVideoMetadataConnectionsRecommendations = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendations') }})
    related: OnDemandPageVideoMetadataConnectionsRelated = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('related') }})
    season: OnDemandPageVideoMetadataConnectionsSeason = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('season') }})
    texttracks: OnDemandPageVideoMetadataConnectionsTexttracks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('texttracks') }})
    trailer: OnDemandPageVideoMetadataConnectionsTrailer = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trailer') }})
    users_with_access: OnDemandPageVideoMetadataConnectionsUsersWithAccess = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('users_with_access') }})
    versions: OnDemandPageVideoMetadataConnectionsVersions = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('versions') }})
    
class OnDemandPageVideoMetadataInteractionsBuyDownloadEnum(str, Enum):
    AVAILABLE = "available"
    PURCHASED = "purchased"
    RESTRICTED = "restricted"
    UNAVAILABLE = "unavailable"

class OnDemandPageVideoMetadataInteractionsBuyStreamEnum(str, Enum):
    AVAILABLE = "available"
    PURCHASED = "purchased"
    RESTRICTED = "restricted"
    UNAVAILABLE = "unavailable"


@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoMetadataInteractionsBuy:
    r"""OnDemandPageVideoMetadataInteractionsBuy
    The Buy interaction for a On Demand video.
    """
    
    currency: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    display_price: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_price') }})
    download: OnDemandPageVideoMetadataInteractionsBuyDownloadEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('download') }})
    drm: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('drm') }})
    link: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    price: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    purchase_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchase_time') }})
    stream: OnDemandPageVideoMetadataInteractionsBuyStreamEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stream') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoMetadataInteractionsChannel:
    r"""OnDemandPageVideoMetadataInteractionsChannel
    When a video is referenced by a channel URI, if the user is a moderator of the channel, include information about removing the video from the channel.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoMetadataInteractionsLike:
    r"""OnDemandPageVideoMetadataInteractionsLike
    Information about whether the authenticated user has liked this video.
    """
    
    added: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    added_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_time') }})
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
class OnDemandPageVideoMetadataInteractionsRentStreamEnum(str, Enum):
    AVAILABLE = "available"
    PURCHASED = "purchased"
    RESTRICTED = "restricted"
    UNAVAILABLE = "unavailable"


@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoMetadataInteractionsRent:
    r"""OnDemandPageVideoMetadataInteractionsRent
    The Rent interaction for an On Demand video.
    """
    
    currency: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    display_price: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_price') }})
    drm: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('drm') }})
    expires_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_time') }})
    link: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    price: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    purchase_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchase_time') }})
    stream: OnDemandPageVideoMetadataInteractionsRentStreamEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stream') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoMetadataInteractionsReport:
    r"""OnDemandPageVideoMetadataInteractionsReport
    Information about where and how to report a video.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    reason: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoMetadataInteractionsSubscribe:
    r"""OnDemandPageVideoMetadataInteractionsSubscribe
    Subscription information for an On Demand video.
    """
    
    drm: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('drm') }})
    expires_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_time') }})
    purchase_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchase_time') }})
    stream: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stream') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoMetadataInteractionsWatched:
    r"""OnDemandPageVideoMetadataInteractionsWatched
    Information about removing this video from the user's list of watched videos.
    """
    
    added: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    added_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_time') }})
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoMetadataInteractionsWatchlater:
    r"""OnDemandPageVideoMetadataInteractionsWatchlater
    Information about whether this video appears on the authenticated user's Watch Later list.
    """
    
    added: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    added_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_time') }})
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoMetadataInteractions:
    r"""OnDemandPageVideoMetadataInteractions
    A list of resource URIs related to the video.
    """
    
    buy: OnDemandPageVideoMetadataInteractionsBuy = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('buy') }})
    channel: OnDemandPageVideoMetadataInteractionsChannel = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    like: OnDemandPageVideoMetadataInteractionsLike = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('like') }})
    rent: OnDemandPageVideoMetadataInteractionsRent = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rent') }})
    report: OnDemandPageVideoMetadataInteractionsReport = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('report') }})
    watched: OnDemandPageVideoMetadataInteractionsWatched = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('watched') }})
    watchlater: OnDemandPageVideoMetadataInteractionsWatchlater = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchlater') }})
    subscribe: Optional[OnDemandPageVideoMetadataInteractionsSubscribe] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscribe') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoMetadata:
    r"""OnDemandPageVideoMetadata
    The video's metadata.
    """
    
    connections: OnDemandPageVideoMetadataConnections = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    interactions: OnDemandPageVideoMetadataInteractions = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactions') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoProjectMetadataConnectionsVideos:
    r"""OnDemandPageVideoProjectMetadataConnectionsVideos
    A standard connection object indicating how to get all the videos in this project.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoProjectMetadataConnections:
    r"""OnDemandPageVideoProjectMetadataConnections
    A list of resource URIs related to the project.
    """
    
    videos: OnDemandPageVideoProjectMetadataConnectionsVideos = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoProjectMetadata:
    r"""OnDemandPageVideoProjectMetadata
    The project's metadata.
    """
    
    connections: OnDemandPageVideoProjectMetadataConnections = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoProject:
    r"""OnDemandPageVideoProject
    Information about the folder that contains this video.
    """
    
    created_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_time') }})
    metadata: OnDemandPageVideoProjectMetadata = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    modified_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified_time') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    user: shared_user.User = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
class OnDemandPageVideoPrivacyCommentsEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    NOBODY = "nobody"

class OnDemandPageVideoPrivacyEmbedEnum(str, Enum):
    PRIVATE = "private"
    PUBLIC = "public"

class OnDemandPageVideoPrivacyViewEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    DISABLE = "disable"
    NOBODY = "nobody"
    PASSWORD = "password"
    UNLISTED = "unlisted"
    USERS = "users"


@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoPrivacy:
    r"""OnDemandPageVideoPrivacy
    The video's privacy setting.
    """
    
    add: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('add') }})
    comments: OnDemandPageVideoPrivacyCommentsEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    download: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('download') }})
    embed: OnDemandPageVideoPrivacyEmbedEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed') }})
    view: OnDemandPageVideoPrivacyViewEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('view') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoSpatialDirectorTimeline:
    pitch: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pitch') }})
    roll: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roll') }})
    time_code: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_code') }})
    yaw: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yaw') }})
    
class OnDemandPageVideoSpatialProjectionEnum(str, Enum):
    CUBICAL = "cubical"
    CYLINDRICAL = "cylindrical"
    DOME = "dome"
    EQUIRECTANGULAR = "equirectangular"
    PYRAMID = "pyramid"

class OnDemandPageVideoSpatialStereoFormatEnum(str, Enum):
    LEFT_RIGHT = "left-right"
    MONO = "mono"
    TOP_BOTTOM = "top-bottom"


@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoSpatial:
    r"""OnDemandPageVideoSpatial
    360 spatial data.
    """
    
    director_timeline: list[OnDemandPageVideoSpatialDirectorTimeline] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('director_timeline') }})
    field_of_view: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('field_of_view') }})
    projection: OnDemandPageVideoSpatialProjectionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('projection') }})
    stereo_format: OnDemandPageVideoSpatialStereoFormatEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stereo_format') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoStats:
    r"""OnDemandPageVideoStats
    A collection of stats associated with this video.
    """
    
    plays: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('plays') }})
    
class OnDemandPageVideoStatusEnum(str, Enum):
    AVAILABLE = "available"
    QUOTA_EXCEEDED = "quota_exceeded"
    TOTAL_CAP_EXCEEDED = "total_cap_exceeded"
    TRANSCODE_STARTING = "transcode_starting"
    TRANSCODING = "transcoding"
    TRANSCODING_ERROR = "transcoding_error"
    UNAVAILABLE = "unavailable"
    UPLOADING = "uploading"
    UPLOADING_ERROR = "uploading_error"

class OnDemandPageVideoTranscodeStatusEnum(str, Enum):
    COMPLETE = "complete"
    ERROR = "error"
    IN_PROGRESS = "in_progress"


@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoTranscode:
    r"""OnDemandPageVideoTranscode
    The transcode information for a video upload.
    """
    
    status: Optional[OnDemandPageVideoTranscodeStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
class OnDemandPageVideoUploadApproachEnum(str, Enum):
    POST = "post"
    PULL = "pull"
    STREAMING = "streaming"
    TUS = "tus"

class OnDemandPageVideoUploadStatusEnum(str, Enum):
    COMPLETE = "complete"
    ERROR = "error"
    IN_PROGRESS = "in_progress"


@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoUpload:
    r"""OnDemandPageVideoUpload
    The upload information for this video.
    """
    
    status: OnDemandPageVideoUploadStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    approach: Optional[OnDemandPageVideoUploadApproachEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approach') }})
    complete_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('complete_uri') }})
    form: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('form') }})
    link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    redirect_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirect_url') }})
    size: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    upload_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upload_link') }})
    
class OnDemandPageVideoUserAccountEnum(str, Enum):
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
class OnDemandPageVideoUserMetadataConnectionsAlbums:
    r"""OnDemandPageVideoUserMetadataConnectionsAlbums
    Information about the albums created by this user.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoUserMetadataConnectionsAppearances:
    r"""OnDemandPageVideoUserMetadataConnectionsAppearances
    Information about the appearances of this user in other videos.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoUserMetadataConnectionsBlock:
    r"""OnDemandPageVideoUserMetadataConnectionsBlock
    Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoUserMetadataConnectionsCategories:
    r"""OnDemandPageVideoUserMetadataConnectionsCategories
    Information about this user's followed categories.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoUserMetadataConnectionsChannels:
    r"""OnDemandPageVideoUserMetadataConnectionsChannels
    Information about this user's subscribed channels.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoUserMetadataConnectionsFeed:
    r"""OnDemandPageVideoUserMetadataConnectionsFeed
    Information about this user's feed.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoUserMetadataConnectionsFolders:
    r"""OnDemandPageVideoUserMetadataConnectionsFolders
    Information about this user's folders.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoUserMetadataConnectionsFollowers:
    r"""OnDemandPageVideoUserMetadataConnectionsFollowers
    Information about the user's followers.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoUserMetadataConnectionsFollowing:
    r"""OnDemandPageVideoUserMetadataConnectionsFollowing
    Information about the users that the current user is following.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoUserMetadataConnectionsGroups:
    r"""OnDemandPageVideoUserMetadataConnectionsGroups
    Information about the groups created by this user.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoUserMetadataConnectionsLikes:
    r"""OnDemandPageVideoUserMetadataConnectionsLikes
    Information about the videos that this user has liked.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoUserMetadataConnectionsModeratedChannels:
    r"""OnDemandPageVideoUserMetadataConnectionsModeratedChannels
    Information about the channels that this user moderates.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoUserMetadataConnectionsPictures:
    r"""OnDemandPageVideoUserMetadataConnectionsPictures
    Information about this user's portraits.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoUserMetadataConnectionsPortfolios:
    r"""OnDemandPageVideoUserMetadataConnectionsPortfolios
    Information about this user's portfolios.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoUserMetadataConnectionsRecommendedChannels:
    r"""OnDemandPageVideoUserMetadataConnectionsRecommendedChannels
    A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoUserMetadataConnectionsRecommendedUsers:
    r"""OnDemandPageVideoUserMetadataConnectionsRecommendedUsers
    A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoUserMetadataConnectionsShared:
    r"""OnDemandPageVideoUserMetadataConnectionsShared
    Information about the videos that have been shared with this user.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoUserMetadataConnectionsVideos:
    r"""OnDemandPageVideoUserMetadataConnectionsVideos
    Information about the videos uploaded by this user.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoUserMetadataConnectionsWatchedVideos:
    r"""OnDemandPageVideoUserMetadataConnectionsWatchedVideos
    Information about the videos that this user has watched.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoUserMetadataConnectionsWatchlater:
    r"""OnDemandPageVideoUserMetadataConnectionsWatchlater
    Information about the videos that this user wants to watch later.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoUserMetadataConnections:
    r"""OnDemandPageVideoUserMetadataConnections
    The list of resource URIs related to the user.
    """
    
    albums: OnDemandPageVideoUserMetadataConnectionsAlbums = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('albums') }})
    appearances: OnDemandPageVideoUserMetadataConnectionsAppearances = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('appearances') }})
    block: OnDemandPageVideoUserMetadataConnectionsBlock = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('block') }})
    categories: OnDemandPageVideoUserMetadataConnectionsCategories = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    channels: OnDemandPageVideoUserMetadataConnectionsChannels = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channels') }})
    feed: OnDemandPageVideoUserMetadataConnectionsFeed = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('feed') }})
    folders: OnDemandPageVideoUserMetadataConnectionsFolders = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('folders') }})
    followers: OnDemandPageVideoUserMetadataConnectionsFollowers = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('followers') }})
    following: OnDemandPageVideoUserMetadataConnectionsFollowing = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('following') }})
    groups: OnDemandPageVideoUserMetadataConnectionsGroups = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    likes: OnDemandPageVideoUserMetadataConnectionsLikes = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('likes') }})
    moderated_channels: OnDemandPageVideoUserMetadataConnectionsModeratedChannels = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('moderated_channels') }})
    pictures: OnDemandPageVideoUserMetadataConnectionsPictures = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictures') }})
    portfolios: OnDemandPageVideoUserMetadataConnectionsPortfolios = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    recommended_channels: OnDemandPageVideoUserMetadataConnectionsRecommendedChannels = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommended_channels') }})
    recommended_users: OnDemandPageVideoUserMetadataConnectionsRecommendedUsers = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommended_users') }})
    shared: OnDemandPageVideoUserMetadataConnectionsShared = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shared') }})
    videos: OnDemandPageVideoUserMetadataConnectionsVideos = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    watched_videos: OnDemandPageVideoUserMetadataConnectionsWatchedVideos = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('watched_videos') }})
    watchlater: OnDemandPageVideoUserMetadataConnectionsWatchlater = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchlater') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoUserMetadataInteractionsAddPrivacyUser:
    options: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoUserMetadataInteractionsBlock:
    r"""OnDemandPageVideoUserMetadataInteractionsBlock
    Information related to the block status of this user.
    """
    
    added: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    added_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_time') }})
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoUserMetadataInteractionsFollow:
    r"""OnDemandPageVideoUserMetadataInteractionsFollow
    Information related to the followed status of this user.
    """
    
    added: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoUserMetadataInteractionsReport:
    r"""OnDemandPageVideoUserMetadataInteractionsReport
    Information regarding where and how to report a user.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    reason: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoUserMetadataInteractions:
    block: OnDemandPageVideoUserMetadataInteractionsBlock = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('block') }})
    follow: OnDemandPageVideoUserMetadataInteractionsFollow = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('follow') }})
    report: OnDemandPageVideoUserMetadataInteractionsReport = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('report') }})
    add_privacy_user: Optional[OnDemandPageVideoUserMetadataInteractionsAddPrivacyUser] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add_privacy_user') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoUserMetadata:
    r"""OnDemandPageVideoUserMetadata
    The user's metadata.
    """
    
    connections: OnDemandPageVideoUserMetadataConnections = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    interactions: OnDemandPageVideoUserMetadataInteractions = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactions') }})
    
class OnDemandPageVideoUserPreferencesVideosPrivacyCommentsEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    NOBODY = "nobody"

class OnDemandPageVideoUserPreferencesVideosPrivacyEmbedEnum(str, Enum):
    PRIVATE = "private"
    PUBLIC = "public"
    WHITELIST = "whitelist"

class OnDemandPageVideoUserPreferencesVideosPrivacyViewEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    DISABLE = "disable"
    NOBODY = "nobody"
    PASSWORD = "password"
    UNLISTED = "unlisted"
    USERS = "users"


@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoUserPreferencesVideosPrivacy:
    add: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add') }})
    comments: Optional[OnDemandPageVideoUserPreferencesVideosPrivacyCommentsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    download: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download') }})
    embed: Optional[OnDemandPageVideoUserPreferencesVideosPrivacyEmbedEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed') }})
    view: Optional[OnDemandPageVideoUserPreferencesVideosPrivacyViewEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('view') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoUserPreferencesVideos:
    privacy: Optional[OnDemandPageVideoUserPreferencesVideosPrivacy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoUserPreferences:
    videos: Optional[OnDemandPageVideoUserPreferencesVideos] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoUserUploadQuotaLifetime:
    r"""OnDemandPageVideoUserUploadQuotaLifetime
    Information about the user's lifetime upload usage.
    """
    
    free: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('free') }})
    max: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    used: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('used') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoUserUploadQuotaPeriodic:
    r"""OnDemandPageVideoUserUploadQuotaPeriodic
    Information about the user's usage for the current period.
    """
    
    free: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('free') }})
    max: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    reset_date: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reset_date') }})
    used: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('used') }})
    
class OnDemandPageVideoUserUploadQuotaSpaceShowingEnum(str, Enum):
    LIFETIME = "lifetime"
    PERIODIC = "periodic"


@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoUserUploadQuotaSpace:
    r"""OnDemandPageVideoUserUploadQuotaSpace
    Information about the user's upload space remaining for the current period.
    """
    
    free: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('free') }})
    max: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    showing: OnDemandPageVideoUserUploadQuotaSpaceShowingEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('showing') }})
    used: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('used') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoUserUploadQuota:
    r"""OnDemandPageVideoUserUploadQuota
    Appears only when the user has upload access and is looking at their own user record.
    """
    
    lifetime: OnDemandPageVideoUserUploadQuotaLifetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifetime') }})
    periodic: OnDemandPageVideoUserUploadQuotaPeriodic = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('periodic') }})
    space: OnDemandPageVideoUserUploadQuotaSpace = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('space') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoUserWebsites:
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    link: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideoUser:
    r"""OnDemandPageVideoUser
    The video owner.
    """
    
    account: OnDemandPageVideoUserAccountEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    bio: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bio') }})
    created_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_time') }})
    link: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    location: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    metadata: OnDemandPageVideoUserMetadata = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pictures: shared_picture.Picture = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictures') }})
    resource_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    upload_quota: OnDemandPageVideoUserUploadQuota = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('upload_quota') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    websites: list[OnDemandPageVideoUserWebsites] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('websites') }})
    content_filter: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_filter') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    preferences: Optional[OnDemandPageVideoUserPreferences] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferences') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageVideo:
    r"""OnDemandPageVideo
    The trailer for this On Demand page.
    """
    
    categories: list[shared_category.Category] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    content_rating: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_rating') }})
    context: OnDemandPageVideoContext = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    created_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_time') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    duration: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    embed: shared_embed_settings.EmbedSettings = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed') }})
    height: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    language: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    license: OnDemandPageVideoLicenseEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('license') }})
    link: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    metadata: OnDemandPageVideoMetadata = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    modified_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified_time') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pictures: shared_picture.Picture = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictures') }})
    privacy: OnDemandPageVideoPrivacy = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    release_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('release_time') }})
    resource_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    spatial: OnDemandPageVideoSpatial = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('spatial') }})
    stats: OnDemandPageVideoStats = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stats') }})
    status: OnDemandPageVideoStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: list[shared_tag.Tag] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    transcode: OnDemandPageVideoTranscode = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transcode') }})
    upload: OnDemandPageVideoUpload = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('upload') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    user: OnDemandPageVideoUser = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    width: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    last_user_action_event_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_user_action_event_date') }})
    parent_folder: Optional[OnDemandPageVideoProject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent_folder') }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    
class OnDemandPageTypeEnum(str, Enum):
    FILM = "film"
    SERIES = "series"

class OnDemandPageUserAccountEnum(str, Enum):
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
class OnDemandPageUserMetadataConnectionsAlbums:
    r"""OnDemandPageUserMetadataConnectionsAlbums
    Information about the albums created by this user.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageUserMetadataConnectionsAppearances:
    r"""OnDemandPageUserMetadataConnectionsAppearances
    Information about the appearances of this user in other videos.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageUserMetadataConnectionsBlock:
    r"""OnDemandPageUserMetadataConnectionsBlock
    Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageUserMetadataConnectionsCategories:
    r"""OnDemandPageUserMetadataConnectionsCategories
    Information about this user's followed categories.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageUserMetadataConnectionsChannels:
    r"""OnDemandPageUserMetadataConnectionsChannels
    Information about this user's subscribed channels.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageUserMetadataConnectionsFeed:
    r"""OnDemandPageUserMetadataConnectionsFeed
    Information about this user's feed.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageUserMetadataConnectionsFolders:
    r"""OnDemandPageUserMetadataConnectionsFolders
    Information about this user's folders.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageUserMetadataConnectionsFollowers:
    r"""OnDemandPageUserMetadataConnectionsFollowers
    Information about the user's followers.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageUserMetadataConnectionsFollowing:
    r"""OnDemandPageUserMetadataConnectionsFollowing
    Information about the users that the current user is following.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageUserMetadataConnectionsGroups:
    r"""OnDemandPageUserMetadataConnectionsGroups
    Information about the groups created by this user.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageUserMetadataConnectionsLikes:
    r"""OnDemandPageUserMetadataConnectionsLikes
    Information about the videos that this user has liked.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageUserMetadataConnectionsModeratedChannels:
    r"""OnDemandPageUserMetadataConnectionsModeratedChannels
    Information about the channels that this user moderates.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageUserMetadataConnectionsPictures:
    r"""OnDemandPageUserMetadataConnectionsPictures
    Information about this user's portraits.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageUserMetadataConnectionsPortfolios:
    r"""OnDemandPageUserMetadataConnectionsPortfolios
    Information about this user's portfolios.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageUserMetadataConnectionsRecommendedChannels:
    r"""OnDemandPageUserMetadataConnectionsRecommendedChannels
    A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageUserMetadataConnectionsRecommendedUsers:
    r"""OnDemandPageUserMetadataConnectionsRecommendedUsers
    A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageUserMetadataConnectionsShared:
    r"""OnDemandPageUserMetadataConnectionsShared
    Information about the videos that have been shared with this user.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageUserMetadataConnectionsVideos:
    r"""OnDemandPageUserMetadataConnectionsVideos
    Information about the videos uploaded by this user.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageUserMetadataConnectionsWatchedVideos:
    r"""OnDemandPageUserMetadataConnectionsWatchedVideos
    Information about the videos that this user has watched.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageUserMetadataConnectionsWatchlater:
    r"""OnDemandPageUserMetadataConnectionsWatchlater
    Information about the videos that this user wants to watch later.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageUserMetadataConnections:
    r"""OnDemandPageUserMetadataConnections
    The list of resource URIs related to the user.
    """
    
    albums: OnDemandPageUserMetadataConnectionsAlbums = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('albums') }})
    appearances: OnDemandPageUserMetadataConnectionsAppearances = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('appearances') }})
    block: OnDemandPageUserMetadataConnectionsBlock = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('block') }})
    categories: OnDemandPageUserMetadataConnectionsCategories = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    channels: OnDemandPageUserMetadataConnectionsChannels = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channels') }})
    feed: OnDemandPageUserMetadataConnectionsFeed = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('feed') }})
    folders: OnDemandPageUserMetadataConnectionsFolders = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('folders') }})
    followers: OnDemandPageUserMetadataConnectionsFollowers = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('followers') }})
    following: OnDemandPageUserMetadataConnectionsFollowing = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('following') }})
    groups: OnDemandPageUserMetadataConnectionsGroups = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    likes: OnDemandPageUserMetadataConnectionsLikes = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('likes') }})
    moderated_channels: OnDemandPageUserMetadataConnectionsModeratedChannels = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('moderated_channels') }})
    pictures: OnDemandPageUserMetadataConnectionsPictures = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictures') }})
    portfolios: OnDemandPageUserMetadataConnectionsPortfolios = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    recommended_channels: OnDemandPageUserMetadataConnectionsRecommendedChannels = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommended_channels') }})
    recommended_users: OnDemandPageUserMetadataConnectionsRecommendedUsers = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommended_users') }})
    shared: OnDemandPageUserMetadataConnectionsShared = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shared') }})
    videos: OnDemandPageUserMetadataConnectionsVideos = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    watched_videos: OnDemandPageUserMetadataConnectionsWatchedVideos = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('watched_videos') }})
    watchlater: OnDemandPageUserMetadataConnectionsWatchlater = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchlater') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageUserMetadataInteractionsAddPrivacyUser:
    options: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageUserMetadataInteractionsBlock:
    r"""OnDemandPageUserMetadataInteractionsBlock
    Information related to the block status of this user.
    """
    
    added: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    added_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_time') }})
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageUserMetadataInteractionsFollow:
    r"""OnDemandPageUserMetadataInteractionsFollow
    Information related to the followed status of this user.
    """
    
    added: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageUserMetadataInteractionsReport:
    r"""OnDemandPageUserMetadataInteractionsReport
    Information regarding where and how to report a user.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    reason: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageUserMetadataInteractions:
    block: OnDemandPageUserMetadataInteractionsBlock = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('block') }})
    follow: OnDemandPageUserMetadataInteractionsFollow = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('follow') }})
    report: OnDemandPageUserMetadataInteractionsReport = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('report') }})
    add_privacy_user: Optional[OnDemandPageUserMetadataInteractionsAddPrivacyUser] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add_privacy_user') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageUserMetadata:
    r"""OnDemandPageUserMetadata
    The user's metadata.
    """
    
    connections: OnDemandPageUserMetadataConnections = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    interactions: OnDemandPageUserMetadataInteractions = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactions') }})
    
class OnDemandPageUserPreferencesVideosPrivacyCommentsEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    NOBODY = "nobody"

class OnDemandPageUserPreferencesVideosPrivacyEmbedEnum(str, Enum):
    PRIVATE = "private"
    PUBLIC = "public"
    WHITELIST = "whitelist"

class OnDemandPageUserPreferencesVideosPrivacyViewEnum(str, Enum):
    ANYBODY = "anybody"
    CONTACTS = "contacts"
    DISABLE = "disable"
    NOBODY = "nobody"
    PASSWORD = "password"
    UNLISTED = "unlisted"
    USERS = "users"


@dataclass_json
@dataclasses.dataclass
class OnDemandPageUserPreferencesVideosPrivacy:
    add: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add') }})
    comments: Optional[OnDemandPageUserPreferencesVideosPrivacyCommentsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    download: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download') }})
    embed: Optional[OnDemandPageUserPreferencesVideosPrivacyEmbedEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed') }})
    view: Optional[OnDemandPageUserPreferencesVideosPrivacyViewEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('view') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageUserPreferencesVideos:
    privacy: Optional[OnDemandPageUserPreferencesVideosPrivacy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageUserPreferences:
    videos: Optional[OnDemandPageUserPreferencesVideos] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageUserUploadQuotaLifetime:
    r"""OnDemandPageUserUploadQuotaLifetime
    Information about the user's lifetime upload usage.
    """
    
    free: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('free') }})
    max: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    used: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('used') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageUserUploadQuotaPeriodic:
    r"""OnDemandPageUserUploadQuotaPeriodic
    Information about the user's usage for the current period.
    """
    
    free: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('free') }})
    max: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    reset_date: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reset_date') }})
    used: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('used') }})
    
class OnDemandPageUserUploadQuotaSpaceShowingEnum(str, Enum):
    LIFETIME = "lifetime"
    PERIODIC = "periodic"


@dataclass_json
@dataclasses.dataclass
class OnDemandPageUserUploadQuotaSpace:
    r"""OnDemandPageUserUploadQuotaSpace
    Information about the user's upload space remaining for the current period.
    """
    
    free: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('free') }})
    max: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    showing: OnDemandPageUserUploadQuotaSpaceShowingEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('showing') }})
    used: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('used') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageUserUploadQuota:
    r"""OnDemandPageUserUploadQuota
    Appears only when the user has upload access and is looking at their own user record.
    """
    
    lifetime: OnDemandPageUserUploadQuotaLifetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifetime') }})
    periodic: OnDemandPageUserUploadQuotaPeriodic = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('periodic') }})
    space: OnDemandPageUserUploadQuotaSpace = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('space') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageUserWebsites:
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    link: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPageUser:
    r"""OnDemandPageUser
    The user who created this On Demand page.
    """
    
    account: OnDemandPageUserAccountEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    bio: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bio') }})
    created_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_time') }})
    link: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    location: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    metadata: OnDemandPageUserMetadata = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pictures: shared_picture.Picture = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictures') }})
    resource_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    upload_quota: OnDemandPageUserUploadQuota = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('upload_quota') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    websites: list[OnDemandPageUserWebsites] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('websites') }})
    content_filter: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_filter') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    preferences: Optional[OnDemandPageUserPreferences] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferences') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandPage:
    background: OnDemandPagePicture = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('background') }})
    colors: OnDemandPageColors = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('colors') }})
    content_rating: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_rating') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    domain_link: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain_link') }})
    episodes: OnDemandPageEpisodes = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('episodes') }})
    genres: list[shared_on_demand_genre.OnDemandGenre] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('genres') }})
    link: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    metadata: OnDemandPageMetadata = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pictures: OnDemandPagePicture = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictures') }})
    preorder: OnDemandPagePreorder = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('preorder') }})
    published: OnDemandPagePublished = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('published') }})
    rating: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rating') }})
    resource_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    subscription: OnDemandPageSubscription = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscription') }})
    theme: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('theme') }})
    thumbnail: OnDemandPagePicture = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnail') }})
    trailer: OnDemandPageVideo = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trailer') }})
    type: OnDemandPageTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    user: OnDemandPageUser = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    created_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_time') }})
    film: Optional[shared_video.Video] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('film') }})
    modified_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified_time') }})
    sku: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    
