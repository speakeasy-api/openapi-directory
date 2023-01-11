import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountaddress as shared_accountaddress
from ..shared import email as shared_email
from ..shared import identifier as shared_identifier
from ..shared import phonenumber as shared_phonenumber


@dataclass_json
@dataclasses.dataclass
class AccountProfile:
    address: Optional[list[shared_accountaddress.AccountAddress]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    email: Optional[list[shared_email.Email]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    identifier: Optional[list[shared_identifier.Identifier]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifier') }})
    phone_number: Optional[list[shared_phonenumber.PhoneNumber]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumber') }})
    
