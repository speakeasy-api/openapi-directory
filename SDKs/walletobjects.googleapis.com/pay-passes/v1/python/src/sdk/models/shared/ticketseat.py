import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import localizedstring as shared_localizedstring

class TicketSeatFareClassEnum(str, Enum):
    FARE_CLASS_UNSPECIFIED = "FARE_CLASS_UNSPECIFIED"
    ECONOMY_UPPER = "ECONOMY"
    ECONOMY_LOWER = "economy"
    FIRST_UPPER = "FIRST"
    FIRST_LOWER = "first"
    BUSINESS_UPPER = "BUSINESS"
    BUSINESS_LOWER = "business"


@dataclass_json
@dataclasses.dataclass
class TicketSeat:
    coach: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coach') }})
    custom_fare_class: Optional[shared_localizedstring.LocalizedString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFareClass') }})
    fare_class: Optional[TicketSeatFareClassEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fareClass') }})
    seat: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seat') }})
    seat_assignment: Optional[shared_localizedstring.LocalizedString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seatAssignment') }})
    
