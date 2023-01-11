import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import placedbetleg as shared_placedbetleg


@dataclass_json
@dataclasses.dataclass
class PlacedBet:
    estimated_returns: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimatedReturns') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    settled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('settled') }})
    stake: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stake') }})
    status: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    trans_date_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transDateTime') }})
    type_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('typeCode') }})
    type_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('typeName') }})
    winnings: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('winnings') }})
    cashin_value: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cashinValue') }})
    free_bet_value: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freeBetValue') }})
    legs: Optional[list[shared_placedbetleg.PlacedBetLeg]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legs') }})
    num_lines: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numLines') }})
    num_selections: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numSelections') }})
    receipt: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('receipt') }})
    stake_per_line: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stakePerLine') }})
    
