import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SecurityAnimationAnimationTypeEnum(str, Enum):
    ANIMATION_UNSPECIFIED = "ANIMATION_UNSPECIFIED"
    FOIL_SHIMMER_UPPER = "FOIL_SHIMMER"
    FOIL_SHIMMER_MIXED = "foilShimmer"


@dataclass_json
@dataclasses.dataclass
class SecurityAnimation:
    animation_type: Optional[SecurityAnimationAnimationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('animationType') }})
    
