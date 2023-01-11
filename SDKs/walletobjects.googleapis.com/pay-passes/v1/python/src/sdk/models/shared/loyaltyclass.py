import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import callbackoptions as shared_callbackoptions
from ..shared import classtemplateinfo as shared_classtemplateinfo
from ..shared import discoverableprogram as shared_discoverableprogram
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

class LoyaltyClassMultipleDevicesAndHoldersAllowedStatusEnum(str, Enum):
    STATUS_UNSPECIFIED = "STATUS_UNSPECIFIED"
    MULTIPLE_HOLDERS_UPPER = "MULTIPLE_HOLDERS"
    MULTIPLE_HOLDERS_MIXED = "multipleHolders"
    ONE_USER_ALL_DEVICES_UPPER = "ONE_USER_ALL_DEVICES"
    ONE_USER_ALL_DEVICES_MIXED = "oneUserAllDevices"
    ONE_USER_ONE_DEVICE_UPPER = "ONE_USER_ONE_DEVICE"
    ONE_USER_ONE_DEVICE_MIXED = "oneUserOneDevice"

class LoyaltyClassReviewStatusEnum(str, Enum):
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
class LoyaltyClass:
    account_id_label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountIdLabel') }})
    account_name_label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountNameLabel') }})
    allow_multiple_users_per_object: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowMultipleUsersPerObject') }})
    callback_options: Optional[shared_callbackoptions.CallbackOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callbackOptions') }})
    class_template_info: Optional[shared_classtemplateinfo.ClassTemplateInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classTemplateInfo') }})
    country_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryCode') }})
    discoverable_program: Optional[shared_discoverableprogram.DiscoverableProgram] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discoverableProgram') }})
    enable_smart_tap: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableSmartTap') }})
    hero_image: Optional[shared_image.Image] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('heroImage') }})
    hex_background_color: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hexBackgroundColor') }})
    homepage_uri: Optional[shared_uri.URI] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homepageUri') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image_modules_data: Optional[list[shared_imagemoduledata.ImageModuleData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageModulesData') }})
    info_module_data: Optional[shared_infomoduledata.InfoModuleData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infoModuleData') }})
    issuer_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuerName') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    links_module_data: Optional[shared_linksmoduledata.LinksModuleData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linksModuleData') }})
    localized_account_id_label: Optional[shared_localizedstring.LocalizedString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localizedAccountIdLabel') }})
    localized_account_name_label: Optional[shared_localizedstring.LocalizedString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localizedAccountNameLabel') }})
    localized_issuer_name: Optional[shared_localizedstring.LocalizedString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localizedIssuerName') }})
    localized_program_name: Optional[shared_localizedstring.LocalizedString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localizedProgramName') }})
    localized_rewards_tier: Optional[shared_localizedstring.LocalizedString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localizedRewardsTier') }})
    localized_rewards_tier_label: Optional[shared_localizedstring.LocalizedString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localizedRewardsTierLabel') }})
    localized_secondary_rewards_tier: Optional[shared_localizedstring.LocalizedString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localizedSecondaryRewardsTier') }})
    localized_secondary_rewards_tier_label: Optional[shared_localizedstring.LocalizedString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localizedSecondaryRewardsTierLabel') }})
    locations: Optional[list[shared_latlongpoint.LatLongPoint]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations') }})
    messages: Optional[list[shared_message.Message]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    multiple_devices_and_holders_allowed_status: Optional[LoyaltyClassMultipleDevicesAndHoldersAllowedStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multipleDevicesAndHoldersAllowedStatus') }})
    program_logo: Optional[shared_image.Image] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('programLogo') }})
    program_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('programName') }})
    redemption_issuers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redemptionIssuers') }})
    review: Optional[shared_review.Review] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('review') }})
    review_status: Optional[LoyaltyClassReviewStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reviewStatus') }})
    rewards_tier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rewardsTier') }})
    rewards_tier_label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rewardsTierLabel') }})
    secondary_rewards_tier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondaryRewardsTier') }})
    secondary_rewards_tier_label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondaryRewardsTierLabel') }})
    text_modules_data: Optional[list[shared_textmoduledata.TextModuleData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textModulesData') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    word_mark: Optional[shared_image.Image] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wordMark') }})
    
