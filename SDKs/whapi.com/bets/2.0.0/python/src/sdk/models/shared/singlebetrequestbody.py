import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SingleBetRequestBody:
    price_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceType') }})
    selection_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectionId') }})
    stake: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stake') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    delayed_bet_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delayedBetId') }})
    free_bet_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freeBetId') }})
    price_den: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceDen') }})
    price_num: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceNum') }})
    
