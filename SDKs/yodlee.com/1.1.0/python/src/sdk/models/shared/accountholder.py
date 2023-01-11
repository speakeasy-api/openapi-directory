import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import identifier as shared_identifier
from ..shared import name as shared_name

class AccountHolderOwnershipEnum(str, Enum):
    PRIMARY = "PRIMARY"
    SECONDARY = "SECONDARY"
    CUSTODIAN = "CUSTODIAN"
    OTHERS = "OTHERS"
    POWER_OF_ATTORNEY = "POWER_OF_ATTORNEY"
    TRUSTEE = "TRUSTEE"
    JOINT_OWNER = "JOINT_OWNER"
    BENEFICIARY = "BENEFICIARY"
    AAS = "AAS"
    BUSINESS = "BUSINESS"
    DBA = "DBA"
    TRUST = "TRUST"


@dataclass_json
@dataclasses.dataclass
class AccountHolder:
    gender: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gender') }})
    identifier: Optional[list[shared_identifier.Identifier]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifier') }})
    name: Optional[shared_name.Name] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    ownership: Optional[AccountHolderOwnershipEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownership') }})
    
