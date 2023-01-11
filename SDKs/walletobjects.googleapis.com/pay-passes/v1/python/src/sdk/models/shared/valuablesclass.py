import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eventticketclass as shared_eventticketclass
from ..shared import flightclass as shared_flightclass
from ..shared import giftcardclass as shared_giftcardclass
from ..shared import loyaltyclass as shared_loyaltyclass
from ..shared import offerclass as shared_offerclass
from ..shared import transitclass as shared_transitclass


@dataclass_json
@dataclasses.dataclass
class ValuablesClass:
    r"""ValuablesClass
    Contains a single type of ValuablesClass.
    """
    
    event_ticket_class: Optional[shared_eventticketclass.EventTicketClass] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTicketClass') }})
    flight_class: Optional[shared_flightclass.FlightClass] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flightClass') }})
    gift_card_class: Optional[shared_giftcardclass.GiftCardClass] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('giftCardClass') }})
    loyalty_class: Optional[shared_loyaltyclass.LoyaltyClass] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loyaltyClass') }})
    offer_class: Optional[shared_offerclass.OfferClass] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offerClass') }})
    transit_class: Optional[shared_transitclass.TransitClass] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transitClass') }})
    
