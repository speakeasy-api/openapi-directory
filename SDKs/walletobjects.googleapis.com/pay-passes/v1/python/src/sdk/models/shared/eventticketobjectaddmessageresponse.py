import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eventticketobject as shared_eventticketobject


@dataclass_json
@dataclasses.dataclass
class EventTicketObjectAddMessageResponse:
    resource: Optional[shared_eventticketobject.EventTicketObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    
