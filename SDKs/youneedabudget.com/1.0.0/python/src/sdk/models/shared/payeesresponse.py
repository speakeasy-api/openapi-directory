import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import payee as shared_payee


@dataclass_json
@dataclasses.dataclass
class PayeesResponseData:
    payees: list[shared_payee.Payee] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payees') }})
    server_knowledge: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server_knowledge') }})
    

@dataclass_json
@dataclasses.dataclass
class PayeesResponse:
    data: PayeesResponseData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
