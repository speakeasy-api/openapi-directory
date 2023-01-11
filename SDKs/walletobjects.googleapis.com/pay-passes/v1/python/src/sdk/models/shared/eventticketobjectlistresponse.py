import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pagination as shared_pagination
from ..shared import eventticketobject as shared_eventticketobject


@dataclass_json
@dataclasses.dataclass
class EventTicketObjectListResponse:
    pagination: Optional[shared_pagination.Pagination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    resources: Optional[list[shared_eventticketobject.EventTicketObject]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    
