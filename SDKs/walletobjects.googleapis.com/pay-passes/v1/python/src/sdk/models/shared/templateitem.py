import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fieldselector as shared_fieldselector

class TemplateItemPredefinedItemEnum(str, Enum):
    PREDEFINED_ITEM_UNSPECIFIED = "PREDEFINED_ITEM_UNSPECIFIED"
    FREQUENT_FLYER_PROGRAM_NAME_AND_NUMBER_UPPER = "FREQUENT_FLYER_PROGRAM_NAME_AND_NUMBER"
    FREQUENT_FLYER_PROGRAM_NAME_AND_NUMBER_MIXED = "frequentFlyerProgramNameAndNumber"
    FLIGHT_NUMBER_AND_OPERATING_FLIGHT_NUMBER_UPPER = "FLIGHT_NUMBER_AND_OPERATING_FLIGHT_NUMBER"
    FLIGHT_NUMBER_AND_OPERATING_FLIGHT_NUMBER_MIXED = "flightNumberAndOperatingFlightNumber"


@dataclass_json
@dataclasses.dataclass
class TemplateItem:
    first_value: Optional[shared_fieldselector.FieldSelector] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstValue') }})
    predefined_item: Optional[TemplateItemPredefinedItemEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predefinedItem') }})
    second_value: Optional[shared_fieldselector.FieldSelector] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondValue') }})
    
