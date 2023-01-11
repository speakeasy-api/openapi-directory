import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class UpdateCategoryRequestSourceEnum(str, Enum):
    SYSTEM = "SYSTEM"
    USER = "USER"


@dataclass_json
@dataclasses.dataclass
class UpdateCategoryRequest:
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    source: UpdateCategoryRequestSourceEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    category_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryName') }})
    high_level_category_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('highLevelCategoryName') }})
    
