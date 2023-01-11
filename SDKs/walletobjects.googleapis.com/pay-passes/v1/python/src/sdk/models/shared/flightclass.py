import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import boardingandseatingpolicy as shared_boardingandseatingpolicy
from ..shared import callbackoptions as shared_callbackoptions
from ..shared import classtemplateinfo as shared_classtemplateinfo
from ..shared import airportinfo as shared_airportinfo
from ..shared import flightheader as shared_flightheader
from ..shared import image as shared_image
from ..shared import uri as shared_uri
from ..shared import imagemoduledata as shared_imagemoduledata
from ..shared import infomoduledata as shared_infomoduledata
from ..shared import linksmoduledata as shared_linksmoduledata
from ..shared import localizedstring as shared_localizedstring
from ..shared import latlongpoint as shared_latlongpoint
from ..shared import message as shared_message
from ..shared import review as shared_review
from ..shared import textmoduledata as shared_textmoduledata

class FlightClassFlightStatusEnum(str, Enum):
    FLIGHT_STATUS_UNSPECIFIED = "FLIGHT_STATUS_UNSPECIFIED"
    SCHEDULED_UPPER = "SCHEDULED"
    SCHEDULED_LOWER = "scheduled"
    ACTIVE_UPPER = "ACTIVE"
    ACTIVE_LOWER = "active"
    LANDED_UPPER = "LANDED"
    LANDED_LOWER = "landed"
    CANCELLED_UPPER = "CANCELLED"
    CANCELLED_LOWER = "cancelled"
    REDIRECTED_UPPER = "REDIRECTED"
    REDIRECTED_LOWER = "redirected"
    DIVERTED_UPPER = "DIVERTED"
    DIVERTED_LOWER = "diverted"

class FlightClassMultipleDevicesAndHoldersAllowedStatusEnum(str, Enum):
    STATUS_UNSPECIFIED = "STATUS_UNSPECIFIED"
    MULTIPLE_HOLDERS_UPPER = "MULTIPLE_HOLDERS"
    MULTIPLE_HOLDERS_MIXED = "multipleHolders"
    ONE_USER_ALL_DEVICES_UPPER = "ONE_USER_ALL_DEVICES"
    ONE_USER_ALL_DEVICES_MIXED = "oneUserAllDevices"
    ONE_USER_ONE_DEVICE_UPPER = "ONE_USER_ONE_DEVICE"
    ONE_USER_ONE_DEVICE_MIXED = "oneUserOneDevice"

class FlightClassReviewStatusEnum(str, Enum):
    REVIEW_STATUS_UNSPECIFIED = "REVIEW_STATUS_UNSPECIFIED"
    UNDER_REVIEW_UPPER = "UNDER_REVIEW"
    UNDER_REVIEW_MIXED = "underReview"
    APPROVED_UPPER = "APPROVED"
    APPROVED_LOWER = "approved"
    REJECTED_UPPER = "REJECTED"
    REJECTED_LOWER = "rejected"
    DRAFT_UPPER = "DRAFT"
    DRAFT_LOWER = "draft"


@dataclass_json
@dataclasses.dataclass
class FlightClass:
    allow_multiple_users_per_object: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowMultipleUsersPerObject') }})
    boarding_and_seating_policy: Optional[shared_boardingandseatingpolicy.BoardingAndSeatingPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boardingAndSeatingPolicy') }})
    callback_options: Optional[shared_callbackoptions.CallbackOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callbackOptions') }})
    class_template_info: Optional[shared_classtemplateinfo.ClassTemplateInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classTemplateInfo') }})
    country_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryCode') }})
    destination: Optional[shared_airportinfo.AirportInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    enable_smart_tap: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableSmartTap') }})
    flight_header: Optional[shared_flightheader.FlightHeader] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flightHeader') }})
    flight_status: Optional[FlightClassFlightStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flightStatus') }})
    hero_image: Optional[shared_image.Image] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('heroImage') }})
    hex_background_color: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hexBackgroundColor') }})
    homepage_uri: Optional[shared_uri.URI] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homepageUri') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image_modules_data: Optional[list[shared_imagemoduledata.ImageModuleData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageModulesData') }})
    info_module_data: Optional[shared_infomoduledata.InfoModuleData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infoModuleData') }})
    issuer_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuerName') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    language_override: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageOverride') }})
    links_module_data: Optional[shared_linksmoduledata.LinksModuleData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linksModuleData') }})
    local_boarding_date_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localBoardingDateTime') }})
    local_estimated_or_actual_arrival_date_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localEstimatedOrActualArrivalDateTime') }})
    local_estimated_or_actual_departure_date_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localEstimatedOrActualDepartureDateTime') }})
    local_gate_closing_date_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localGateClosingDateTime') }})
    local_scheduled_arrival_date_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localScheduledArrivalDateTime') }})
    local_scheduled_departure_date_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localScheduledDepartureDateTime') }})
    localized_issuer_name: Optional[shared_localizedstring.LocalizedString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localizedIssuerName') }})
    locations: Optional[list[shared_latlongpoint.LatLongPoint]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations') }})
    messages: Optional[list[shared_message.Message]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    multiple_devices_and_holders_allowed_status: Optional[FlightClassMultipleDevicesAndHoldersAllowedStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multipleDevicesAndHoldersAllowedStatus') }})
    origin: Optional[shared_airportinfo.AirportInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('origin') }})
    redemption_issuers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redemptionIssuers') }})
    review: Optional[shared_review.Review] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('review') }})
    review_status: Optional[FlightClassReviewStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reviewStatus') }})
    text_modules_data: Optional[list[shared_textmoduledata.TextModuleData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textModulesData') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    word_mark: Optional[shared_image.Image] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wordMark') }})
    
