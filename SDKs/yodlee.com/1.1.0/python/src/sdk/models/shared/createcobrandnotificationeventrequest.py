import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import createcobrandnotificationevent as shared_createcobrandnotificationevent


@dataclass_json
@dataclasses.dataclass
class CreateCobrandNotificationEventRequest:
    event: shared_createcobrandnotificationevent.CreateCobrandNotificationEvent = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    
