import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import callbackoptions as shared_callbackoptions
from ..shared import classtemplateinfo as shared_classtemplateinfo
from ..shared import localizedstring as shared_localizedstring
from ..shared import eventdatetime as shared_eventdatetime
from ..shared import image as shared_image
from ..shared import uri as shared_uri
from ..shared import imagemoduledata as shared_imagemoduledata
from ..shared import infomoduledata as shared_infomoduledata
from ..shared import linksmoduledata as shared_linksmoduledata
from ..shared import latlongpoint as shared_latlongpoint
from ..shared import message as shared_message
from ..shared import review as shared_review
from ..shared import securityanimation as shared_securityanimation
from ..shared import textmoduledata as shared_textmoduledata
from ..shared import eventvenue as shared_eventvenue

class EventTicketClassConfirmationCodeLabelEnum(str, Enum):
    CONFIRMATION_CODE_LABEL_UNSPECIFIED = "CONFIRMATION_CODE_LABEL_UNSPECIFIED"
    CONFIRMATION_CODE_UPPER = "CONFIRMATION_CODE"
    CONFIRMATION_CODE_MIXED = "confirmationCode"
    CONFIRMATION_NUMBER_UPPER = "CONFIRMATION_NUMBER"
    CONFIRMATION_NUMBER_MIXED = "confirmationNumber"
    ORDER_NUMBER_UPPER = "ORDER_NUMBER"
    ORDER_NUMBER_MIXED = "orderNumber"
    RESERVATION_NUMBER_UPPER = "RESERVATION_NUMBER"
    RESERVATION_NUMBER_MIXED = "reservationNumber"

class EventTicketClassGateLabelEnum(str, Enum):
    GATE_LABEL_UNSPECIFIED = "GATE_LABEL_UNSPECIFIED"
    GATE_UPPER = "GATE"
    GATE_LOWER = "gate"
    DOOR_UPPER = "DOOR"
    DOOR_LOWER = "door"
    ENTRANCE_UPPER = "ENTRANCE"
    ENTRANCE_LOWER = "entrance"

class EventTicketClassMultipleDevicesAndHoldersAllowedStatusEnum(str, Enum):
    STATUS_UNSPECIFIED = "STATUS_UNSPECIFIED"
    MULTIPLE_HOLDERS_UPPER = "MULTIPLE_HOLDERS"
    MULTIPLE_HOLDERS_MIXED = "multipleHolders"
    ONE_USER_ALL_DEVICES_UPPER = "ONE_USER_ALL_DEVICES"
    ONE_USER_ALL_DEVICES_MIXED = "oneUserAllDevices"
    ONE_USER_ONE_DEVICE_UPPER = "ONE_USER_ONE_DEVICE"
    ONE_USER_ONE_DEVICE_MIXED = "oneUserOneDevice"

class EventTicketClassReviewStatusEnum(str, Enum):
    REVIEW_STATUS_UNSPECIFIED = "REVIEW_STATUS_UNSPECIFIED"
    UNDER_REVIEW_UPPER = "UNDER_REVIEW"
    UNDER_REVIEW_MIXED = "underReview"
    APPROVED_UPPER = "APPROVED"
    APPROVED_LOWER = "approved"
    REJECTED_UPPER = "REJECTED"
    REJECTED_LOWER = "rejected"
    DRAFT_UPPER = "DRAFT"
    DRAFT_LOWER = "draft"

class EventTicketClassRowLabelEnum(str, Enum):
    ROW_LABEL_UNSPECIFIED = "ROW_LABEL_UNSPECIFIED"
    ROW_UPPER = "ROW"
    ROW_LOWER = "row"

class EventTicketClassSeatLabelEnum(str, Enum):
    SEAT_LABEL_UNSPECIFIED = "SEAT_LABEL_UNSPECIFIED"
    SEAT_UPPER = "SEAT"
    SEAT_LOWER = "seat"

class EventTicketClassSectionLabelEnum(str, Enum):
    SECTION_LABEL_UNSPECIFIED = "SECTION_LABEL_UNSPECIFIED"
    SECTION_UPPER = "SECTION"
    SECTION_LOWER = "section"
    THEATER_UPPER = "THEATER"
    THEATER_LOWER = "theater"


@dataclass_json
@dataclasses.dataclass
class EventTicketClass:
    allow_multiple_users_per_object: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowMultipleUsersPerObject') }})
    callback_options: Optional[shared_callbackoptions.CallbackOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callbackOptions') }})
    class_template_info: Optional[shared_classtemplateinfo.ClassTemplateInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classTemplateInfo') }})
    confirmation_code_label: Optional[EventTicketClassConfirmationCodeLabelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confirmationCodeLabel') }})
    country_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryCode') }})
    custom_confirmation_code_label: Optional[shared_localizedstring.LocalizedString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customConfirmationCodeLabel') }})
    custom_gate_label: Optional[shared_localizedstring.LocalizedString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customGateLabel') }})
    custom_row_label: Optional[shared_localizedstring.LocalizedString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customRowLabel') }})
    custom_seat_label: Optional[shared_localizedstring.LocalizedString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customSeatLabel') }})
    custom_section_label: Optional[shared_localizedstring.LocalizedString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customSectionLabel') }})
    date_time: Optional[shared_eventdatetime.EventDateTime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateTime') }})
    enable_smart_tap: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableSmartTap') }})
    event_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventId') }})
    event_name: Optional[shared_localizedstring.LocalizedString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventName') }})
    fine_print: Optional[shared_localizedstring.LocalizedString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finePrint') }})
    gate_label: Optional[EventTicketClassGateLabelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gateLabel') }})
    hero_image: Optional[shared_image.Image] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('heroImage') }})
    hex_background_color: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hexBackgroundColor') }})
    homepage_uri: Optional[shared_uri.URI] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homepageUri') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image_modules_data: Optional[list[shared_imagemoduledata.ImageModuleData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageModulesData') }})
    info_module_data: Optional[shared_infomoduledata.InfoModuleData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infoModuleData') }})
    issuer_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuerName') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    links_module_data: Optional[shared_linksmoduledata.LinksModuleData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linksModuleData') }})
    localized_issuer_name: Optional[shared_localizedstring.LocalizedString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localizedIssuerName') }})
    locations: Optional[list[shared_latlongpoint.LatLongPoint]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations') }})
    logo: Optional[shared_image.Image] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logo') }})
    messages: Optional[list[shared_message.Message]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    multiple_devices_and_holders_allowed_status: Optional[EventTicketClassMultipleDevicesAndHoldersAllowedStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multipleDevicesAndHoldersAllowedStatus') }})
    redemption_issuers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redemptionIssuers') }})
    review: Optional[shared_review.Review] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('review') }})
    review_status: Optional[EventTicketClassReviewStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reviewStatus') }})
    row_label: Optional[EventTicketClassRowLabelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowLabel') }})
    seat_label: Optional[EventTicketClassSeatLabelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seatLabel') }})
    section_label: Optional[EventTicketClassSectionLabelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sectionLabel') }})
    security_animation: Optional[shared_securityanimation.SecurityAnimation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityAnimation') }})
    text_modules_data: Optional[list[shared_textmoduledata.TextModuleData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textModulesData') }})
    venue: Optional[shared_eventvenue.EventVenue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('venue') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    word_mark: Optional[shared_image.Image] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wordMark') }})
    
