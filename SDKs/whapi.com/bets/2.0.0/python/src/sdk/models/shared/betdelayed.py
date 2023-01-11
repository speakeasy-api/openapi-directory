import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BetDelayed:
    delay_period_seconds: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delayPeriodSeconds') }})
    delayed_bet_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delayedBetId') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    number: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    
