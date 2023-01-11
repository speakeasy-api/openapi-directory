import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eventticketclass as shared_eventticketclass


@dataclass_json
@dataclasses.dataclass
class EventTicketClassAddMessageResponse:
    resource: Optional[shared_eventticketclass.EventTicketClass] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    
