import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PlayProgressiveTypeEnum(str, Enum):
    SOURCE = "source"
    VIDEO_MP4 = "video/mp4"
    VIDEO_WEBM = "video/webm"
    VP6_X_VIDEO = "vp6/x-video"


@dataclass_json
@dataclasses.dataclass
class PlayProgressive:
    created_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_time') }})
    fps: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fps') }})
    height: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    link: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    link_expiration_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link_expiration_time') }})
    md5: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('md5') }})
    size: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    type: PlayProgressiveTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    width: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    log: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('log') }})
    
class PlayStatusEnum(str, Enum):
    PLAYABLE = "playable"
    PURCHASE_REQUIRED = "purchase_required"
    RESTRICTED = "restricted"
    UNAVAILABLE = "unavailable"


@dataclass_json
@dataclasses.dataclass
class Play:
    status: PlayStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    progressive: Optional[list[PlayProgressive]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('progressive') }})
    
