import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import did as shared_did
from ..shared import line as shared_line
from ..shared import basicuser as shared_basicuser


@dataclass_json
@dataclasses.dataclass
class EndUserRoute:
    block_caller_id: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('block_caller_id') }})
    caller_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caller_id') }})
    dids: Optional[list[shared_did.Did]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dids') }})
    dnd_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnd_enabled') }})
    extension_handsets: Optional[list[shared_line.Line]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension_handsets') }})
    extension_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension_number') }})
    location_id: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location_id') }})
    user: Optional[shared_basicuser.BasicUser] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    vtt_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vtt_enabled') }})
    
