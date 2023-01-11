import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class VerificationBankTransferCodeTypeEnum(str, Enum):
    BSB = "BSB"
    IFSC = "IFSC"
    ROUTING_NUMBER = "ROUTING_NUMBER"
    SORT_CODE = "SORT_CODE"


@dataclass_json
@dataclasses.dataclass
class VerificationBankTransferCode:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[VerificationBankTransferCodeTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
