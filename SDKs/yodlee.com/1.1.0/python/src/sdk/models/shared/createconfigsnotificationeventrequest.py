import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import createconfigsnotificationevent as shared_createconfigsnotificationevent


@dataclass_json
@dataclasses.dataclass
class CreateConfigsNotificationEventRequest:
    event: shared_createconfigsnotificationevent.CreateConfigsNotificationEvent = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    
