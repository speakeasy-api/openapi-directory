import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateEntityType:
    locale: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('locale') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentId') }})
    timezone: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    
