import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PaymentIdentifierTypeEnum(str, Enum):
    REFERENCE_NUMBER = "REFERENCE_NUMBER"
    PLATFORM_CODE = "PLATFORM_CODE"


@dataclass_json
@dataclasses.dataclass
class PaymentIdentifier:
    type: Optional[PaymentIdentifierTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
