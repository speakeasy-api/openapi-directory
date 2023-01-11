import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ChargeTierPriceFormatEnum(str, Enum):
    FLAT_FEE = "FlatFee"
    PER_UNIT = "PerUnit"


@dataclass_json
@dataclasses.dataclass
class ChargeTier:
    price: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    price_format: ChargeTierPriceFormatEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceFormat') }})
    starting_unit: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startingUnit') }})
    tier: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tier') }})
    ending_unit: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endingUnit') }})
    
