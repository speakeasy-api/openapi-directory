import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class TextTrackTypeEnum(str, Enum):
    CAPTIONS = "captions"
    SUBTITLES = "subtitles"


@dataclass_json
@dataclasses.dataclass
class TextTrack:
    active: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    hls_link: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hls_link') }})
    hls_link_expires_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hls_link_expires_time') }})
    language: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    link: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    link_expires_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link_expires_time') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: TextTrackTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
