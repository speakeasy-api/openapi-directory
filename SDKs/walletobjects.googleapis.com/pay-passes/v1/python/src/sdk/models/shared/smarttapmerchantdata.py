import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import authenticationkey as shared_authenticationkey


@dataclass_json
@dataclasses.dataclass
class SmartTapMerchantData:
    authentication_keys: Optional[list[shared_authenticationkey.AuthenticationKey]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authenticationKeys') }})
    smart_tap_merchant_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smartTapMerchantId') }})
    
