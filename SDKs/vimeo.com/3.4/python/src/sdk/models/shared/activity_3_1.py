import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import category as shared_category
from ..shared import channel as shared_channel
from ..shared import video as shared_video
from ..shared import group as shared_group
from ..shared import tag as shared_tag
from ..shared import user as shared_user


@dataclass_json
@dataclasses.dataclass
class Activity31MetadataConnectionsRelated:
    r"""Activity31MetadataConnectionsRelated
    Related content for this activity.
    """
    
    options: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class Activity31MetadataConnections:
    r"""Activity31MetadataConnections
    A list of resource URIs related to the activity.
    """
    
    related: Activity31MetadataConnectionsRelated = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('related') }})
    

@dataclass_json
@dataclasses.dataclass
class Activity31Metadata:
    r"""Activity31Metadata
    The activity's metadata.
    """
    
    connections: Activity31MetadataConnections = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    
class Activity31TypeEnum(str, Enum):
    APPEARANCE = "appearance"
    CATEGORY = "category"
    CHANNEL = "channel"
    FACEBOOK_FEED = "facebook_feed"
    GROUP = "group"
    LIKE = "like"
    ONDEMAND = "ondemand"
    SHARE = "share"
    TAG = "tag"
    TWITTER_TIMELINE = "twitter_timeline"
    UPLOAD = "upload"


@dataclass_json
@dataclasses.dataclass
class Activity31:
    clip: shared_video.Video = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clip') }})
    metadata: Activity31Metadata = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    type: Activity31TypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    category: Optional[shared_category.Category] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    channel: Optional[shared_channel.Channel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    group: Optional[shared_group.Group] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group') }})
    tag: Optional[shared_tag.Tag] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    user: Optional[shared_user.User] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
