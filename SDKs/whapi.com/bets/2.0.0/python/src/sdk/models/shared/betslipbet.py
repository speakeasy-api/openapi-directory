import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import freebetdetail as shared_freebetdetail
from ..shared import betslipleg as shared_betslipleg


@dataclass_json
@dataclasses.dataclass
class Betslipbet:
    legs: list[shared_betslipleg.Betslipleg] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('legs') }})
    number: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    type_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('typeCode') }})
    bet_multiplier: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('betMultiplier') }})
    free_bets: Optional[list[shared_freebetdetail.FreeBetDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freeBets') }})
    max_stake: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxStake') }})
    min_stake: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minStake') }})
    num_lines: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numLines') }})
    type_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('typeName') }})
    
