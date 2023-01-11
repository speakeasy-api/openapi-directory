import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PayeeLocation:
    deleted: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    latitude: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    longitude: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    payee_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payee_id') }})
    
