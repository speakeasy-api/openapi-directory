import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import localizedstring as shared_localizedstring
from ..shared import ticketseat as shared_ticketseat


@dataclass_json
@dataclasses.dataclass
class TicketLeg:
    arrival_date_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arrivalDateTime') }})
    carriage: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carriage') }})
    departure_date_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('departureDateTime') }})
    destination_name: Optional[shared_localizedstring.LocalizedString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationName') }})
    destination_station_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationStationCode') }})
    fare_name: Optional[shared_localizedstring.LocalizedString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fareName') }})
    origin_name: Optional[shared_localizedstring.LocalizedString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originName') }})
    origin_station_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originStationCode') }})
    platform: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    ticket_seat: Optional[shared_ticketseat.TicketSeat] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ticketSeat') }})
    ticket_seats: Optional[list[shared_ticketseat.TicketSeat]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ticketSeats') }})
    transit_operator_name: Optional[shared_localizedstring.LocalizedString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transitOperatorName') }})
    transit_terminus_name: Optional[shared_localizedstring.LocalizedString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transitTerminusName') }})
    zone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zone') }})
    
