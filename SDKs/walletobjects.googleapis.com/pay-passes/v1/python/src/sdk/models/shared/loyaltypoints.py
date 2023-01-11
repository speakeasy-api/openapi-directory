import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import loyaltypointsbalance as shared_loyaltypointsbalance
from ..shared import localizedstring as shared_localizedstring


@dataclass_json
@dataclasses.dataclass
class LoyaltyPoints:
    balance: Optional[shared_loyaltypointsbalance.LoyaltyPointsBalance] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('balance') }})
    label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    localized_label: Optional[shared_localizedstring.LocalizedString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localizedLabel') }})
    
