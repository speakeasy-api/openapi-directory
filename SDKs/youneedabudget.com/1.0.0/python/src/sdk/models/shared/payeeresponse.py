import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import payee as shared_payee


@dataclass_json
@dataclasses.dataclass
class PayeeResponseData:
    payee: shared_payee.Payee = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payee') }})
    

@dataclass_json
@dataclasses.dataclass
class PayeeResponse:
    data: PayeeResponseData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
