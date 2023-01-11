import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import securityholding as shared_securityholding


@dataclass_json
@dataclasses.dataclass
class HoldingSecuritiesResponse:
    holding: Optional[list[shared_securityholding.SecurityHolding]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('holding') }})
    
