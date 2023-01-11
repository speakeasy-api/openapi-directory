import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import picture as shared_picture
from ..shared import user as shared_user


@dataclass_json
@dataclasses.dataclass
class AlbumPictureSizes:
    height: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    link: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    width: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    link_with_play_button: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link_with_play_button') }})
    
class AlbumPictureTypeEnum(str, Enum):
    CAUTION = "caution"
    CUSTOM = "custom"
    DEFAULT = "default"


@dataclass_json
@dataclasses.dataclass
class AlbumPicture:
    r"""AlbumPicture
    The custom logo for this album.
    """
    
    active: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    resource_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    sizes: list[AlbumPictureSizes] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizes') }})
    type: AlbumPictureTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    

@dataclass_json
@dataclasses.dataclass
class AlbumEmbed:
    r"""AlbumEmbed
    Embed data for the album.
    """
    
    html: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html') }})
    
class AlbumLayoutEnum(str, Enum):
    GRID = "grid"
    PLAYER = "player"


@dataclass_json
@dataclasses.dataclass
class AlbumMetadataConnectionsVideos:
    r"""AlbumMetadataConnectionsVideos
    Information about the videos that belong to this album.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class AlbumMetadataConnections:
    r"""AlbumMetadataConnections
    A collection of information that is connected to this resource.
    """
    
    videos: AlbumMetadataConnectionsVideos = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    

@dataclass_json
@dataclasses.dataclass
class AlbumMetadataInteractionsAddCustomThumbnails:
    r"""AlbumMetadataInteractionsAddCustomThumbnails
    An action indicating that the authenticated user is an admin of the album and may therefore add custom thumbnails. This data requires a bearer token with the `private` scope.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class AlbumMetadataInteractionsAddLogos:
    r"""AlbumMetadataInteractionsAddLogos
    An action indicating that the authenticated user is an admin of the album and may therefore add custom logos. This data requires a bearer token with the `private` scope.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class AlbumMetadataInteractionsAddVideos:
    r"""AlbumMetadataInteractionsAddVideos
    An action indicating that the authenticated user is an admin of the album and may therefore add videos. This data requires a bearer token with the `private` scope.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class AlbumMetadataInteractions:
    r"""AlbumMetadataInteractions
    A list of resource URIs related to the album.
    """
    
    add_custom_thumbnails: AlbumMetadataInteractionsAddCustomThumbnails = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('add_custom_thumbnails') }})
    add_logos: AlbumMetadataInteractionsAddLogos = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('add_logos') }})
    add_videos: AlbumMetadataInteractionsAddVideos = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('add_videos') }})
    

@dataclass_json
@dataclasses.dataclass
class AlbumMetadata:
    r"""AlbumMetadata
    Metadata about the album.
    """
    
    connections: AlbumMetadataConnections = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    interactions: AlbumMetadataInteractions = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactions') }})
    
class AlbumPrivacyViewEnum(str, Enum):
    ANYBODY = "anybody"
    EMBED_ONLY = "embed_only"
    PASSWORD = "password"


@dataclass_json
@dataclasses.dataclass
class AlbumPrivacy:
    r"""AlbumPrivacy
    The privacy settings of the album.
    """
    
    view: AlbumPrivacyViewEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('view') }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    
class AlbumSortEnum(str, Enum):
    ADDED_FIRST = "added_first"
    ADDED_LAST = "added_last"
    ALPHABETICAL = "alphabetical"
    ARRANGED = "arranged"
    COMMENTS = "comments"
    LIKES = "likes"
    NEWEST = "newest"
    OLDEST = "oldest"
    PLAYS = "plays"

class AlbumThemeEnum(str, Enum):
    DARK = "dark"
    STANDARD = "standard"


@dataclass_json
@dataclasses.dataclass
class Album:
    allow_continuous_play: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_continuous_play') }})
    allow_downloads: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_downloads') }})
    allow_share: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_share') }})
    brand_color: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('brand_color') }})
    created_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_time') }})
    custom_logo: AlbumPicture = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_logo') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    domain: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    duration: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    embed: AlbumEmbed = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed') }})
    embed_brand_color: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed_brand_color') }})
    embed_custom_logo: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed_custom_logo') }})
    hide_nav: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hide_nav') }})
    hide_vimeo_logo: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hide_vimeo_logo') }})
    layout: AlbumLayoutEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('layout') }})
    link: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    metadata: AlbumMetadata = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    modified_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified_time') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pictures: shared_picture.Picture = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictures') }})
    privacy: AlbumPrivacy = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    resource_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    review_mode: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('review_mode') }})
    sort: AlbumSortEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sort') }})
    theme: AlbumThemeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('theme') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    use_custom_domain: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_custom_domain') }})
    user: shared_user.User = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    web_brand_color: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('web_brand_color') }})
    web_custom_logo: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('web_custom_logo') }})
    
