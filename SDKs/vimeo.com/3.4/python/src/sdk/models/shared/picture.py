import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PictureSizes:
    height: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    link: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    width: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    link_with_play_button: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link_with_play_button') }})
    
class PictureTypeEnum(str, Enum):
    CAUTION = "caution"
    CUSTOM = "custom"
    DEFAULT = "default"


@dataclass_json
@dataclasses.dataclass
class Picture:
    active: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    resource_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_key') }})
    sizes: list[PictureSizes] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizes') }})
    type: PictureTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    
