import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import payeelocation as shared_payeelocation


@dataclass_json
@dataclasses.dataclass
class PayeeLocationResponseData:
    payee_location: shared_payeelocation.PayeeLocation = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payee_location') }})
    

@dataclass_json
@dataclasses.dataclass
class PayeeLocationResponse:
    data: PayeeLocationResponseData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
