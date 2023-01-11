import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AccountAddressTypeEnum(str, Enum):
    HOME = "HOME"
    BUSINESS = "BUSINESS"
    POBOX = "POBOX"
    RETAIL = "RETAIL"
    OFFICE = "OFFICE"
    SMALL_BUSINESS = "SMALL_BUSINESS"
    COMMUNICATION = "COMMUNICATION"
    PERMANENT = "PERMANENT"
    STATEMENT_ADDRESS = "STATEMENT_ADDRESS"
    PAYMENT = "PAYMENT"
    PAYOFF = "PAYOFF"
    UNKNOWN = "UNKNOWN"


@dataclass_json
@dataclasses.dataclass
class AccountAddress:
    address1: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address1') }})
    address2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address2') }})
    address3: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address3') }})
    city: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    source_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceType') }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    street: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('street') }})
    type: Optional[AccountAddressTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    zip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zip') }})
    
