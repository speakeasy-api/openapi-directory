import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Betslippart:
    include_in_multiple: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeInMultiple') }})
    price_den: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceDen') }})
    price_num: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceNum') }})
    price_type: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceType') }})
    selection_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectionId') }})
    each_way_available: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eachWayAvailable') }})
    leg_group: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legGroup') }})
    price_changed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceChanged') }})
    single_available: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('singleAvailable') }})
    starting_price_available: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startingPriceAvailable') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_changed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusChanged') }})
    
