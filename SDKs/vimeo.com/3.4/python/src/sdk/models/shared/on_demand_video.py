import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import picture as shared_picture
from ..shared import user as shared_user


@dataclass_json
@dataclasses.dataclass
class OnDemandVideoBuy:
    r"""OnDemandVideoBuy
    Information about purchasing this video.
    """
    
    active: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    price: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    purchased: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchased') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandVideoInteractionsPage:
    r"""OnDemandVideoInteractionsPage
    Information about how the authenticated user can interact with the connection to the video's On Demand page.
    """
    
    added: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandVideoInteractions:
    r"""OnDemandVideoInteractions
    An object containing information about how the authenticated user can interact with this On Demand page.
    """
    
    page: OnDemandVideoInteractionsPage = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandVideoMetadataConnectionsSeason:
    r"""OnDemandVideoMetadataConnectionsSeason
    Information about this season.
    """
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandVideoMetadataConnections:
    season: OnDemandVideoMetadataConnectionsSeason = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('season') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandVideoMetadataInteractionsLikes:
    r"""OnDemandVideoMetadataInteractionsLikes
    Information about the user's Like interactions with this video.
    """
    
    added: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    added_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_time') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandVideoMetadataInteractionsWatchlater:
    r"""OnDemandVideoMetadataInteractionsWatchlater
    Information about the user's Watch Later interactions with this video.
    """
    
    added: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    added_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_time') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandVideoMetadataInteractions:
    likes: OnDemandVideoMetadataInteractionsLikes = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('likes') }})
    watchlater: OnDemandVideoMetadataInteractionsWatchlater = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchlater') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandVideoMetadata:
    r"""OnDemandVideoMetadata
    Metadata information about this video.
    """
    
    connections: OnDemandVideoMetadataConnections = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    interactions: OnDemandVideoMetadataInteractions = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactions') }})
    

@dataclass_json
@dataclasses.dataclass
class OnDemandVideoRent:
    r"""OnDemandVideoRent
    Information about renting this video.
    """
    
    active: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    price: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    purchased: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchased') }})
    
class OnDemandVideoTypeEnum(str, Enum):
    EXTRA = "extra"
    MAIN = "main"
    TRAILER = "trailer"


@dataclass_json
@dataclasses.dataclass
class OnDemandVideo:
    buy: OnDemandVideoBuy = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('buy') }})
    interactions: OnDemandVideoInteractions = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactions') }})
    link: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    metadata: OnDemandVideoMetadata = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    play_progress: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('play_progress') }})
    release_year: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('release_year') }})
    rent: OnDemandVideoRent = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rent') }})
    type: OnDemandVideoTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    duration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    episode: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('episode') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    options: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    pictures: Optional[shared_picture.Picture] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictures') }})
    position: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    release_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('release_date') }})
    user: Optional[shared_user.User] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
