import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cobrandnotificationevent as shared_cobrandnotificationevent


@dataclass_json
@dataclasses.dataclass
class CobrandNotificationResponse:
    event: Optional[list[shared_cobrandnotificationevent.CobrandNotificationEvent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    
