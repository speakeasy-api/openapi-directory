import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import updatecobrandnotificationevent as shared_updatecobrandnotificationevent


@dataclass_json
@dataclasses.dataclass
class UpdateCobrandNotificationEventRequest:
    event: shared_updatecobrandnotificationevent.UpdateCobrandNotificationEvent = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    
