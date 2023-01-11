import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import did as shared_did


@dataclass_json
@dataclasses.dataclass
class UserExtension:
    dids: Optional[list[shared_did.Did]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dids') }})
    extension_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension_number') }})
    
