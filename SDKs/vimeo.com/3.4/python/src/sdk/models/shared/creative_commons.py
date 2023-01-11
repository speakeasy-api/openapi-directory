import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CreativeCommonsCodeEnum(str, Enum):
    BY = "by"
    BY_NC = "by-nc"
    BY_NC_ND = "by-nc-nd"
    BY_NC_SA = "by-nc-sa"
    BY_ND = "by-nd"
    BY_SA = "by-sa"
    CC0 = "cc0"


@dataclass_json
@dataclasses.dataclass
class CreativeCommons:
    code: CreativeCommonsCodeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
