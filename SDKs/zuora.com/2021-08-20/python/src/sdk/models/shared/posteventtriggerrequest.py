import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eventtype as shared_eventtype


@dataclass_json
@dataclasses.dataclass
class PostEventTriggerRequest:
    active: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    base_object: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseObject') }})
    condition: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    event_type: shared_eventtype.EventType = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventType') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    
