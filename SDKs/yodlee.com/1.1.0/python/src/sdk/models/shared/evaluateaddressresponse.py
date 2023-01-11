import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountaddress as shared_accountaddress


@dataclass_json
@dataclasses.dataclass
class EvaluateAddressResponse:
    address: Optional[list[shared_accountaddress.AccountAddress]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    is_valid_address: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isValidAddress') }})
    
