import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import leg as shared_leg


@dataclass_json
@dataclasses.dataclass
class Bet:
    legs: list[shared_leg.Leg] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('legs') }})
    number: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    stake: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stake') }})
    type_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('typeCode') }})
    delayed_bet_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delayedBetId') }})
    free_bet_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freeBetId') }})
    
