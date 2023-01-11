import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bet as shared_bet


@dataclass_json
@dataclasses.dataclass
class ComplexBetRequestBody:
    bets: Optional[list[shared_bet.Bet]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bets') }})
    
