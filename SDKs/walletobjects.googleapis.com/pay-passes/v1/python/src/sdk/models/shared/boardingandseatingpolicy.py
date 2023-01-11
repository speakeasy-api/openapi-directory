import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class BoardingAndSeatingPolicyBoardingPolicyEnum(str, Enum):
    BOARDING_POLICY_UNSPECIFIED = "BOARDING_POLICY_UNSPECIFIED"
    ZONE_BASED_UPPER = "ZONE_BASED"
    ZONE_BASED_MIXED = "zoneBased"
    GROUP_BASED_UPPER = "GROUP_BASED"
    GROUP_BASED_MIXED = "groupBased"
    BOARDING_POLICY_OTHER_UPPER = "BOARDING_POLICY_OTHER"
    BOARDING_POLICY_OTHER_MIXED = "boardingPolicyOther"

class BoardingAndSeatingPolicySeatClassPolicyEnum(str, Enum):
    SEAT_CLASS_POLICY_UNSPECIFIED = "SEAT_CLASS_POLICY_UNSPECIFIED"
    CABIN_BASED_UPPER = "CABIN_BASED"
    CABIN_BASED_MIXED = "cabinBased"
    CLASS_BASED_UPPER = "CLASS_BASED"
    CLASS_BASED_MIXED = "classBased"
    TIER_BASED_UPPER = "TIER_BASED"
    TIER_BASED_MIXED = "tierBased"
    SEAT_CLASS_POLICY_OTHER_UPPER = "SEAT_CLASS_POLICY_OTHER"
    SEAT_CLASS_POLICY_OTHER_MIXED = "seatClassPolicyOther"


@dataclass_json
@dataclasses.dataclass
class BoardingAndSeatingPolicy:
    boarding_policy: Optional[BoardingAndSeatingPolicyBoardingPolicyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boardingPolicy') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    seat_class_policy: Optional[BoardingAndSeatingPolicySeatClassPolicyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seatClassPolicy') }})
    
