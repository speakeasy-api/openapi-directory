import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ContentRatingCodeEnum(str, Enum):
    DRUGS = "drugs"
    LANGUAGE = "language"
    NUDITY = "nudity"
    SAFE = "safe"
    UNRATED = "unrated"
    VIOLENCE = "violence"


@dataclass_json
@dataclasses.dataclass
class ContentRating:
    code: ContentRatingCodeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
