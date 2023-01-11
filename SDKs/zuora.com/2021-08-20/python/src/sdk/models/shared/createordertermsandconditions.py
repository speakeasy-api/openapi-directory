import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lastterm as shared_lastterm
from ..shared import renewalterm as shared_renewalterm

class CreateOrderTermsAndConditionsRenewalSettingEnum(str, Enum):
    RENEW_WITH_SPECIFIC_TERM = "RENEW_WITH_SPECIFIC_TERM"
    RENEW_TO_EVERGREEN = "RENEW_TO_EVERGREEN"


@dataclass_json
@dataclasses.dataclass
class CreateOrderTermsAndConditions:
    r"""CreateOrderTermsAndConditions
    Information about an order action of type `TermsAndConditions`.
    
    """
    
    auto_renew: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoRenew') }})
    last_term: Optional[shared_lastterm.LastTerm] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastTerm') }})
    renewal_setting: Optional[CreateOrderTermsAndConditionsRenewalSettingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renewalSetting') }})
    renewal_terms: Optional[list[shared_renewalterm.RenewalTerm]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renewalTerms') }})
    
