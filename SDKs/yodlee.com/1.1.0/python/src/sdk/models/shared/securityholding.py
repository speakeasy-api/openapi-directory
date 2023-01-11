import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclass_json
@dataclasses.dataclass
class SecurityHolding:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    security: Optional[shared_security.Security] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('security') }})
    
