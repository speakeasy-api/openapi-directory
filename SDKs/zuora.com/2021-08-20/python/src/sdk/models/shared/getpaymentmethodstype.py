import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import getpaymentmethodtype as shared_getpaymentmethodtype


@dataclass_json
@dataclasses.dataclass
class GetPaymentMethodsType:
    credit_cards: Optional[list[shared_getpaymentmethodtype.GetPaymentMethodType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditCards') }})
    next_page: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPage') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    
