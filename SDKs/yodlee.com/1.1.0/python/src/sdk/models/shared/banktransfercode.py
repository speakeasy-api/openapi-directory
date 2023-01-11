import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class BankTransferCodeTypeEnum(str, Enum):
    BSB = "BSB"
    IFSC = "IFSC"
    ROUTING_NUMBER = "ROUTING_NUMBER"
    SORT_CODE = "SORT_CODE"


@dataclass_json
@dataclasses.dataclass
class BankTransferCode:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[BankTransferCodeTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
