import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eventticketclass as shared_eventticketclass
from ..shared import eventticketobject as shared_eventticketobject
from ..shared import flightclass as shared_flightclass
from ..shared import flightobject as shared_flightobject
from ..shared import giftcardclass as shared_giftcardclass
from ..shared import giftcardobject as shared_giftcardobject
from ..shared import loyaltyclass as shared_loyaltyclass
from ..shared import loyaltyobject as shared_loyaltyobject
from ..shared import offerclass as shared_offerclass
from ..shared import offerobject as shared_offerobject
from ..shared import transitclass as shared_transitclass
from ..shared import transitobject as shared_transitobject


@dataclass_json
@dataclasses.dataclass
class Resources:
    event_ticket_classes: Optional[list[shared_eventticketclass.EventTicketClass]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTicketClasses') }})
    event_ticket_objects: Optional[list[shared_eventticketobject.EventTicketObject]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTicketObjects') }})
    flight_classes: Optional[list[shared_flightclass.FlightClass]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flightClasses') }})
    flight_objects: Optional[list[shared_flightobject.FlightObject]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flightObjects') }})
    gift_card_classes: Optional[list[shared_giftcardclass.GiftCardClass]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('giftCardClasses') }})
    gift_card_objects: Optional[list[shared_giftcardobject.GiftCardObject]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('giftCardObjects') }})
    loyalty_classes: Optional[list[shared_loyaltyclass.LoyaltyClass]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loyaltyClasses') }})
    loyalty_objects: Optional[list[shared_loyaltyobject.LoyaltyObject]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loyaltyObjects') }})
    offer_classes: Optional[list[shared_offerclass.OfferClass]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offerClasses') }})
    offer_objects: Optional[list[shared_offerobject.OfferObject]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offerObjects') }})
    transit_classes: Optional[list[shared_transitclass.TransitClass]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transitClasses') }})
    transit_objects: Optional[list[shared_transitobject.TransitObject]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transitObjects') }})
    
