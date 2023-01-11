import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import applinkdata as shared_applinkdata
from ..shared import barcode as shared_barcode
from ..shared import eventticketclass as shared_eventticketclass
from ..shared import money as shared_money
from ..shared import groupinginfo as shared_groupinginfo
from ..shared import image as shared_image
from ..shared import imagemoduledata as shared_imagemoduledata
from ..shared import infomoduledata as shared_infomoduledata
from ..shared import linksmoduledata as shared_linksmoduledata
from ..shared import latlongpoint as shared_latlongpoint
from ..shared import message as shared_message
from ..shared import eventreservationinfo as shared_eventreservationinfo
from ..shared import eventseat as shared_eventseat
from ..shared import textmoduledata as shared_textmoduledata
from ..shared import localizedstring as shared_localizedstring
from ..shared import timeinterval as shared_timeinterval

class EventTicketObjectStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE_UPPER = "ACTIVE"
    ACTIVE_LOWER = "active"
    COMPLETED_UPPER = "COMPLETED"
    COMPLETED_LOWER = "completed"
    EXPIRED_UPPER = "EXPIRED"
    EXPIRED_LOWER = "expired"
    INACTIVE_UPPER = "INACTIVE"
    INACTIVE_LOWER = "inactive"


@dataclass_json
@dataclasses.dataclass
class EventTicketObject:
    app_link_data: Optional[shared_applinkdata.AppLinkData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appLinkData') }})
    barcode: Optional[shared_barcode.Barcode] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('barcode') }})
    class_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classId') }})
    class_reference: Optional[shared_eventticketclass.EventTicketClass] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classReference') }})
    disable_expiration_notification: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableExpirationNotification') }})
    face_value: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('faceValue') }})
    grouping_info: Optional[shared_groupinginfo.GroupingInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupingInfo') }})
    has_linked_device: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasLinkedDevice') }})
    has_users: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasUsers') }})
    hero_image: Optional[shared_image.Image] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('heroImage') }})
    hex_background_color: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hexBackgroundColor') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image_modules_data: Optional[list[shared_imagemoduledata.ImageModuleData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageModulesData') }})
    info_module_data: Optional[shared_infomoduledata.InfoModuleData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infoModuleData') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    linked_offer_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedOfferIds') }})
    links_module_data: Optional[shared_linksmoduledata.LinksModuleData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linksModuleData') }})
    locations: Optional[list[shared_latlongpoint.LatLongPoint]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations') }})
    messages: Optional[list[shared_message.Message]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    reservation_info: Optional[shared_eventreservationinfo.EventReservationInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservationInfo') }})
    seat_info: Optional[shared_eventseat.EventSeat] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seatInfo') }})
    smart_tap_redemption_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smartTapRedemptionValue') }})
    state: Optional[EventTicketObjectStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    text_modules_data: Optional[list[shared_textmoduledata.TextModuleData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textModulesData') }})
    ticket_holder_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ticketHolderName') }})
    ticket_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ticketNumber') }})
    ticket_type: Optional[shared_localizedstring.LocalizedString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ticketType') }})
    valid_time_interval: Optional[shared_timeinterval.TimeInterval] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validTimeInterval') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
