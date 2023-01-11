import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class EmailTypeEnum(str, Enum):
    PRIMARY = "PRIMARY"
    SECONDARY = "SECONDARY"
    PERSONAL = "PERSONAL"
    WORK = "WORK"
    OTHERS = "OTHERS"


@dataclass_json
@dataclasses.dataclass
class Email:
    type: Optional[EmailTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
