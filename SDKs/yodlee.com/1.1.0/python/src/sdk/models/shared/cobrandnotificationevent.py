import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CobrandNotificationEventNameEnum(str, Enum):
    REFRESH = "REFRESH"
    DATA_UPDATES = "DATA_UPDATES"
    AUTO_REFRESH_UPDATES = "AUTO_REFRESH_UPDATES"


@dataclass_json
@dataclasses.dataclass
class CobrandNotificationEvent:
    callback_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callbackUrl') }})
    name: Optional[CobrandNotificationEventNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
