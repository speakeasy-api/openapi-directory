import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configsnotificationevent as shared_configsnotificationevent


@dataclass_json
@dataclasses.dataclass
class ConfigsNotificationResponse:
    event: Optional[list[shared_configsnotificationevent.ConfigsNotificationEvent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    
