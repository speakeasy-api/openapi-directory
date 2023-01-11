import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class IdentifierTypeEnum(str, Enum):
    NIE = "NIE"
    DNI = "DNI"
    EIN = "EIN"
    BN = "BN"
    AADHAR = "AADHAR"
    NIN = "NIN"
    NRIC = "NRIC"


@dataclass_json
@dataclasses.dataclass
class Identifier:
    type: Optional[IdentifierTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
