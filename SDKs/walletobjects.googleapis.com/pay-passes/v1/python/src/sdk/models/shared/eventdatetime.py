import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import localizedstring as shared_localizedstring

class EventDateTimeDoorsOpenLabelEnum(str, Enum):
    DOORS_OPEN_LABEL_UNSPECIFIED = "DOORS_OPEN_LABEL_UNSPECIFIED"
    DOORS_OPEN_UPPER = "DOORS_OPEN"
    DOORS_OPEN_MIXED = "doorsOpen"
    GATES_OPEN_UPPER = "GATES_OPEN"
    GATES_OPEN_MIXED = "gatesOpen"


@dataclass_json
@dataclasses.dataclass
class EventDateTime:
    custom_doors_open_label: Optional[shared_localizedstring.LocalizedString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customDoorsOpenLabel') }})
    doors_open: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doorsOpen') }})
    doors_open_label: Optional[EventDateTimeDoorsOpenLabelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doorsOpenLabel') }})
    end: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    start: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    
