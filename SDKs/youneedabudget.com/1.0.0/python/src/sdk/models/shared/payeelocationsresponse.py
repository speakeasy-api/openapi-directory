import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import payeelocation as shared_payeelocation


@dataclass_json
@dataclasses.dataclass
class PayeeLocationsResponseData:
    payee_locations: list[shared_payeelocation.PayeeLocation] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payee_locations') }})
    

@dataclass_json
@dataclasses.dataclass
class PayeeLocationsResponse:
    data: PayeeLocationsResponseData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
