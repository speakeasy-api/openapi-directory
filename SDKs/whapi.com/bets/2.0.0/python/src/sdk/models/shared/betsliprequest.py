import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import leg as shared_leg


@dataclass_json
@dataclasses.dataclass
class BetSlipRequest:
    legs: Optional[list[shared_leg.Leg]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legs') }})
    
