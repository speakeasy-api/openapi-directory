import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attribute as shared_attribute
from ..shared import attribute as shared_attribute

class ProvidersDatasetNameEnum(str, Enum):
    BASIC_AGG_DATA = "BASIC_AGG_DATA"
    ADVANCE_AGG_DATA = "ADVANCE_AGG_DATA"
    ACCT_PROFILE = "ACCT_PROFILE"
    DOCUMENT = "DOCUMENT"


@dataclass_json
@dataclasses.dataclass
class ProvidersDatasetInput:
    attribute: Optional[list[shared_attribute.AttributeInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attribute') }})
    name: Optional[ProvidersDatasetNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class ProvidersDataset:
    attribute: Optional[list[shared_attribute.Attribute]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attribute') }})
    name: Optional[ProvidersDatasetNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
