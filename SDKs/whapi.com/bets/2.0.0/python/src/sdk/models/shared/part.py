import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Part:
    include_in_multiple: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeInMultiple') }})
    price_den: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceDen') }})
    price_num: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceNum') }})
    price_type: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceType') }})
    selection_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectionId') }})
    
