import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PhoneNumberTypeEnum(str, Enum):
    HOME = "HOME"
    WORK = "WORK"
    LANDLINE = "LANDLINE"
    MOBILE = "MOBILE"


@dataclass_json
@dataclasses.dataclass
class PhoneNumber:
    type: Optional[PhoneNumberTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
