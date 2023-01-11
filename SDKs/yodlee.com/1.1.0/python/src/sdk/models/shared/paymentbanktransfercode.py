import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PaymentBankTransferCodeTypeEnum(str, Enum):
    ROUTING_NUMBER = "ROUTING_NUMBER"
    BSB = "BSB"
    IFSC = "IFSC"
    SORT_CODE = "SORT_CODE"


@dataclass_json
@dataclasses.dataclass
class PaymentBankTransferCode:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[PaymentBankTransferCodeTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
