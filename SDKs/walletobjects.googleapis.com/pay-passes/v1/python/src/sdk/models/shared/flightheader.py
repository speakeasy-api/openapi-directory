import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import flightcarrier as shared_flightcarrier


@dataclass_json
@dataclasses.dataclass
class FlightHeader:
    carrier: Optional[shared_flightcarrier.FlightCarrier] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier') }})
    flight_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flightNumber') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    operating_carrier: Optional[shared_flightcarrier.FlightCarrier] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatingCarrier') }})
    operating_flight_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatingFlightNumber') }})
    
