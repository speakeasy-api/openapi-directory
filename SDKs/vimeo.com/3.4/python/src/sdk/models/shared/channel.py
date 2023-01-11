import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import category as shared_category
from ..shared import picture as shared_picture
from ..shared import tag as shared_tag
from ..shared import user as shared_user


@dataclass_json
@dataclasses.dataclass
class ChannelMetadataConnectionsPrivacyUsers:
    r"""ChannelMetadataConnectionsPrivacyUsers
    Information provided to channel moderators about which users they have specifically permitted to access a private channel. This data requires a bearer token with the `private` scope.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class ChannelMetadataConnectionsUsers:
    r"""ChannelMetadataConnectionsUsers
    Information about the users following or moderating this channel.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class ChannelMetadataConnectionsVideos:
    r"""ChannelMetadataConnectionsVideos
    Information about the videos that belong to this channel.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class ChannelMetadataConnections:
    r"""ChannelMetadataConnections
    A collection of information that is connected to this resource.
    """
    
    privacy_users: ChannelMetadataConnectionsPrivacyUsers = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy_users') }})
    users: ChannelMetadataConnectionsUsers = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    videos: ChannelMetadataConnectionsVideos = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    

@dataclass_json
@dataclasses.dataclass
class ChannelMetadataInteractionsAddModerators:
    r"""ChannelMetadataInteractionsAddModerators
    An action indicating that the authenticated user is the owner of the channel and may therefore add other users as channel moderators. This data requires a bearer token with the `private` scope.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class ChannelMetadataInteractionsAddTo:
    r"""ChannelMetadataInteractionsAddTo
    When a channel appears in the context of adding or removing a video from it (`/videos/{video_id}/available_channels`), include information about adding or removing the video. This data requires a bearer token with the `private` scope.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
class ChannelMetadataInteractionsFollowTypeEnum(str, Enum):
    MODERATOR = "moderator"
    SUBSCRIBER = "subscriber"


@dataclass_json
@dataclasses.dataclass
class ChannelMetadataInteractionsFollow:
    r"""ChannelMetadataInteractionsFollow
    An action indicating if the authenticated user has followed this channel. This data requires a bearer token with the `private` scope.
    """
    
    added: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    added_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_time') }})
    type: ChannelMetadataInteractionsFollowTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class ChannelMetadataInteractionsModerateVideos:
    r"""ChannelMetadataInteractionsModerateVideos
    An action indicating that the authenticated user is a moderator of the channel and may therefore add or remove videos from the channel. This data requires a bearer token with the `private` scope.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class ChannelMetadataInteractions:
    r"""ChannelMetadataInteractions
    A list of resource URIs related to the channel.
    """
    
    add_moderators: ChannelMetadataInteractionsAddModerators = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('add_moderators') }})
    add_to: ChannelMetadataInteractionsAddTo = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('add_to') }})
    follow: ChannelMetadataInteractionsFollow = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('follow') }})
    moderate_videos: ChannelMetadataInteractionsModerateVideos = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('moderate_videos') }})
    

@dataclass_json
@dataclasses.dataclass
class ChannelMetadata:
    r"""ChannelMetadata
    Metadata about the channel.
    """
    
    connections: ChannelMetadataConnections = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    interactions: ChannelMetadataInteractions = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactions') }})
    
class ChannelPrivacyViewEnum(str, Enum):
    ANYBODY = "anybody"
    MODERATORS = "moderators"
    USERS = "users"


@dataclass_json
@dataclasses.dataclass
class ChannelPrivacy:
    r"""ChannelPrivacy
    The privacy settings of the channel.
    """
    
    view: ChannelPrivacyViewEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('view') }})
    

@dataclass_json
@dataclasses.dataclass
class Channel:
    categories: list[shared_category.Category] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    created_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_time') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    header: shared_picture.Picture = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('header') }})
    link: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    metadata: ChannelMetadata = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    modified_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified_time') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pictures: shared_picture.Picture = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictures') }})
    privacy: ChannelPrivacy = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    resource_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    tags: list[shared_tag.Tag] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    user: shared_user.User = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
