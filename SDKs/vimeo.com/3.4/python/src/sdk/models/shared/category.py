import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import picture as shared_picture


@dataclass_json
@dataclasses.dataclass
class CategoryMetadataConnectionsChannels:
    r"""CategoryMetadataConnectionsChannels
    Information about the channels related to this category.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class CategoryMetadataConnectionsGroups:
    r"""CategoryMetadataConnectionsGroups
    Information about the groups related to this category.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class CategoryMetadataConnectionsUsers:
    r"""CategoryMetadataConnectionsUsers
    Information about the users related to this category.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class CategoryMetadataConnectionsVideos:
    r"""CategoryMetadataConnectionsVideos
    Information about the videos related to this category.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class CategoryMetadataConnections:
    r"""CategoryMetadataConnections
    A collection of information that is connected to this resource.
    """
    
    channels: CategoryMetadataConnectionsChannels = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channels') }})
    groups: CategoryMetadataConnectionsGroups = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    users: CategoryMetadataConnectionsUsers = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    videos: CategoryMetadataConnectionsVideos = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    

@dataclass_json
@dataclasses.dataclass
class CategoryMetadataInteractionsFollow:
    r"""CategoryMetadataInteractionsFollow
    An action indicating if the authenticated user has followed this category.
    """
    
    added: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    added_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_time') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class CategoryMetadataInteractions:
    r"""CategoryMetadataInteractions
    The permissible actions related to the category.
    """
    
    follow: CategoryMetadataInteractionsFollow = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('follow') }})
    

@dataclass_json
@dataclasses.dataclass
class CategoryMetadata:
    r"""CategoryMetadata
    Metadata about the category.
    """
    
    connections: CategoryMetadataConnections = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    interactions: CategoryMetadataInteractions = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactions') }})
    

@dataclass_json
@dataclasses.dataclass
class CategoryParent:
    r"""CategoryParent
    The container of this category's parent category, if the current category is a subcategory.
    """
    
    link: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class CategorySubcategories:
    link: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class Category:
    last_video_featured_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_video_featured_time') }})
    link: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    metadata: CategoryMetadata = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent: CategoryParent = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    pictures: shared_picture.Picture = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictures') }})
    resource_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    top_level: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('top_level') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    icon: Optional[shared_picture.Picture] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('icon') }})
    subcategories: Optional[list[CategorySubcategories]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subcategories') }})
    
