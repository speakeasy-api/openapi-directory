import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import updateconfigsnotificationevent as shared_updateconfigsnotificationevent


@dataclass_json
@dataclasses.dataclass
class UpdateConfigsNotificationEventRequest:
    event: shared_updateconfigsnotificationevent.UpdateConfigsNotificationEvent = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    
