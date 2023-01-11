import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import discoverableprogrammerchantsignininfo as shared_discoverableprogrammerchantsignininfo
from ..shared import discoverableprogrammerchantsignupinfo as shared_discoverableprogrammerchantsignupinfo

class DiscoverableProgramStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    TRUSTED_TESTERS_UPPER = "TRUSTED_TESTERS"
    TRUSTED_TESTERS_MIXED = "trustedTesters"
    LIVE_UPPER = "LIVE"
    LIVE_LOWER = "live"
    DISABLED_UPPER = "DISABLED"
    DISABLED_LOWER = "disabled"


@dataclass_json
@dataclasses.dataclass
class DiscoverableProgram:
    r"""DiscoverableProgram
    Information about how a class may be discovered and instantiated from within the Android Pay app. This is done by searching for a loyalty or gift card program and scanning or manually entering.
    """
    
    merchant_signin_info: Optional[shared_discoverableprogrammerchantsignininfo.DiscoverableProgramMerchantSigninInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantSigninInfo') }})
    merchant_signup_info: Optional[shared_discoverableprogrammerchantsignupinfo.DiscoverableProgramMerchantSignupInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantSignupInfo') }})
    state: Optional[DiscoverableProgramStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
