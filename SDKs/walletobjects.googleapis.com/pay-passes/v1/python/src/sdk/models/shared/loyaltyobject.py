import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import applinkdata as shared_applinkdata
from ..shared import barcode as shared_barcode
from ..shared import loyaltyclass as shared_loyaltyclass
from ..shared import image as shared_image
from ..shared import imagemoduledata as shared_imagemoduledata
from ..shared import infomoduledata as shared_infomoduledata
from ..shared import linksmoduledata as shared_linksmoduledata
from ..shared import latlongpoint as shared_latlongpoint
from ..shared import loyaltypoints as shared_loyaltypoints
from ..shared import message as shared_message
from ..shared import textmoduledata as shared_textmoduledata
from ..shared import timeinterval as shared_timeinterval

class LoyaltyObjectStateEnum(str, Enum):
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
class LoyaltyObject:
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    account_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountName') }})
    app_link_data: Optional[shared_applinkdata.AppLinkData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appLinkData') }})
    barcode: Optional[shared_barcode.Barcode] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('barcode') }})
    class_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classId') }})
    class_reference: Optional[shared_loyaltyclass.LoyaltyClass] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classReference') }})
    disable_expiration_notification: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableExpirationNotification') }})
    has_linked_device: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasLinkedDevice') }})
    has_users: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasUsers') }})
    hero_image: Optional[shared_image.Image] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('heroImage') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image_modules_data: Optional[list[shared_imagemoduledata.ImageModuleData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageModulesData') }})
    info_module_data: Optional[shared_infomoduledata.InfoModuleData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infoModuleData') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    linked_offer_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedOfferIds') }})
    links_module_data: Optional[shared_linksmoduledata.LinksModuleData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linksModuleData') }})
    locations: Optional[list[shared_latlongpoint.LatLongPoint]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations') }})
    loyalty_points: Optional[shared_loyaltypoints.LoyaltyPoints] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loyaltyPoints') }})
    messages: Optional[list[shared_message.Message]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    secondary_loyalty_points: Optional[shared_loyaltypoints.LoyaltyPoints] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondaryLoyaltyPoints') }})
    smart_tap_redemption_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smartTapRedemptionValue') }})
    state: Optional[LoyaltyObjectStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    text_modules_data: Optional[list[shared_textmoduledata.TextModuleData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textModulesData') }})
    valid_time_interval: Optional[shared_timeinterval.TimeInterval] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validTimeInterval') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
