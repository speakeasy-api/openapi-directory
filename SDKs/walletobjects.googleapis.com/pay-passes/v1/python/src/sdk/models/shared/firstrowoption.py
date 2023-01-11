import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fieldselector as shared_fieldselector

class FirstRowOptionTransitOptionEnum(str, Enum):
    TRANSIT_OPTION_UNSPECIFIED = "TRANSIT_OPTION_UNSPECIFIED"
    ORIGIN_AND_DESTINATION_NAMES_UPPER = "ORIGIN_AND_DESTINATION_NAMES"
    ORIGIN_AND_DESTINATION_NAMES_MIXED = "originAndDestinationNames"
    ORIGIN_AND_DESTINATION_CODES_UPPER = "ORIGIN_AND_DESTINATION_CODES"
    ORIGIN_AND_DESTINATION_CODES_MIXED = "originAndDestinationCodes"
    ORIGIN_NAME_UPPER = "ORIGIN_NAME"
    ORIGIN_NAME_MIXED = "originName"


@dataclass_json
@dataclasses.dataclass
class FirstRowOption:
    field_option: Optional[shared_fieldselector.FieldSelector] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldOption') }})
    transit_option: Optional[FirstRowOptionTransitOptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transitOption') }})
    
