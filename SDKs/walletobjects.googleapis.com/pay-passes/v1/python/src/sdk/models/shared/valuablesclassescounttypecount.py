import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ValuablesClassesCountTypeCountValuableTypeEnum(str, Enum):
    VALUABLE_TYPE_UNSPECIFIED = "VALUABLE_TYPE_UNSPECIFIED"
    VALUABLE_TYPE_GIFT_CARD = "VALUABLE_TYPE_GIFT_CARD"
    VALUABLE_TYPE_LOYALTY = "VALUABLE_TYPE_LOYALTY"
    VALUABLE_TYPE_OFFER = "VALUABLE_TYPE_OFFER"
    VALUABLE_TYPE_EVENT_TICKET = "VALUABLE_TYPE_EVENT_TICKET"
    VALUABLE_TYPE_FLIGHT = "VALUABLE_TYPE_FLIGHT"
    VALUABLE_TYPE_TRANSIT = "VALUABLE_TYPE_TRANSIT"


@dataclass_json
@dataclasses.dataclass
class ValuablesClassesCountTypeCount:
    r"""ValuablesClassesCountTypeCount
    The type of valuable and the number of ValuablesClasses in that type.
    """
    
    count: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    valuable_type: Optional[ValuablesClassesCountTypeCountValuableTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valuableType') }})
    
