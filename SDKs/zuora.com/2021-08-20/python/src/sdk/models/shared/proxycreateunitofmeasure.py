import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ProxyCreateUnitOfMeasure:
    decimal_places: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DecimalPlaces') }})
    uom_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UomName') }})
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Active') }})
    displayed_as: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisplayedAs') }})
    rounding_mode: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoundingMode') }})
    
