import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import applinkdata as shared_applinkdata
from ..shared import barcode as shared_barcode
from ..shared import transitclass as shared_transitclass
from ..shared import localizedstring as shared_localizedstring
from ..shared import image as shared_image
from ..shared import imagemoduledata as shared_imagemoduledata
from ..shared import infomoduledata as shared_infomoduledata
from ..shared import linksmoduledata as shared_linksmoduledata
from ..shared import latlongpoint as shared_latlongpoint
from ..shared import message as shared_message
from ..shared import purchasedetails as shared_purchasedetails
from ..shared import textmoduledata as shared_textmoduledata
from ..shared import ticketleg as shared_ticketleg
from ..shared import ticketrestrictions as shared_ticketrestrictions
from ..shared import timeinterval as shared_timeinterval

class TransitObjectConcessionCategoryEnum(str, Enum):
    CONCESSION_CATEGORY_UNSPECIFIED = "CONCESSION_CATEGORY_UNSPECIFIED"
    ADULT_UPPER = "ADULT"
    ADULT_LOWER = "adult"
    CHILD_UPPER = "CHILD"
    CHILD_LOWER = "child"
    SENIOR_UPPER = "SENIOR"
    SENIOR_LOWER = "senior"

class TransitObjectPassengerTypeEnum(str, Enum):
    PASSENGER_TYPE_UNSPECIFIED = "PASSENGER_TYPE_UNSPECIFIED"
    SINGLE_PASSENGER_UPPER = "SINGLE_PASSENGER"
    SINGLE_PASSENGER_MIXED = "singlePassenger"
    MULTIPLE_PASSENGERS_UPPER = "MULTIPLE_PASSENGERS"
    MULTIPLE_PASSENGERS_MIXED = "multiplePassengers"

class TransitObjectStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE_UPPER = "ACTIVE"
    ACTIVE_LOWER = "active"
    COMPLETED_UPPER = "COMPLETED"
    COMPLETED_LOWER = "completed"
    EXPIRED_UPPER = "EXPIRED"
    EXPIRED_LOWER = "expired"
    INACTIVE_UPPER = "INACTIVE"
    INACTIVE_LOWER = "inactive"

class TransitObjectTicketStatusEnum(str, Enum):
    TICKET_STATUS_UNSPECIFIED = "TICKET_STATUS_UNSPECIFIED"
    USED_UPPER = "USED"
    USED_LOWER = "used"
    REFUNDED_UPPER = "REFUNDED"
    REFUNDED_LOWER = "refunded"
    EXCHANGED_UPPER = "EXCHANGED"
    EXCHANGED_LOWER = "exchanged"

class TransitObjectTripTypeEnum(str, Enum):
    TRIP_TYPE_UNSPECIFIED = "TRIP_TYPE_UNSPECIFIED"
    ROUND_TRIP_UPPER = "ROUND_TRIP"
    ROUND_TRIP_MIXED = "roundTrip"
    ONE_WAY_UPPER = "ONE_WAY"
    ONE_WAY_MIXED = "oneWay"


@dataclass_json
@dataclasses.dataclass
class TransitObject:
    app_link_data: Optional[shared_applinkdata.AppLinkData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appLinkData') }})
    barcode: Optional[shared_barcode.Barcode] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('barcode') }})
    class_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classId') }})
    class_reference: Optional[shared_transitclass.TransitClass] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classReference') }})
    concession_category: Optional[TransitObjectConcessionCategoryEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('concessionCategory') }})
    custom_concession_category: Optional[shared_localizedstring.LocalizedString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customConcessionCategory') }})
    custom_ticket_status: Optional[shared_localizedstring.LocalizedString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customTicketStatus') }})
    disable_expiration_notification: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableExpirationNotification') }})
    has_linked_device: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasLinkedDevice') }})
    has_users: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasUsers') }})
    hero_image: Optional[shared_image.Image] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('heroImage') }})
    hex_background_color: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hexBackgroundColor') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image_modules_data: Optional[list[shared_imagemoduledata.ImageModuleData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageModulesData') }})
    info_module_data: Optional[shared_infomoduledata.InfoModuleData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infoModuleData') }})
    links_module_data: Optional[shared_linksmoduledata.LinksModuleData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linksModuleData') }})
    locations: Optional[list[shared_latlongpoint.LatLongPoint]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations') }})
    messages: Optional[list[shared_message.Message]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    passenger_names: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passengerNames') }})
    passenger_type: Optional[TransitObjectPassengerTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passengerType') }})
    purchase_details: Optional[shared_purchasedetails.PurchaseDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchaseDetails') }})
    smart_tap_redemption_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smartTapRedemptionValue') }})
    state: Optional[TransitObjectStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    text_modules_data: Optional[list[shared_textmoduledata.TextModuleData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textModulesData') }})
    ticket_leg: Optional[shared_ticketleg.TicketLeg] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ticketLeg') }})
    ticket_legs: Optional[list[shared_ticketleg.TicketLeg]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ticketLegs') }})
    ticket_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ticketNumber') }})
    ticket_restrictions: Optional[shared_ticketrestrictions.TicketRestrictions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ticketRestrictions') }})
    ticket_status: Optional[TransitObjectTicketStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ticketStatus') }})
    trip_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tripId') }})
    trip_type: Optional[TransitObjectTripTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tripType') }})
    valid_time_interval: Optional[shared_timeinterval.TimeInterval] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validTimeInterval') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
