import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import placedbetpart as shared_placedbetpart


@dataclass_json
@dataclasses.dataclass
class PlacedBetLeg:
    number: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    parts: list[shared_placedbetpart.PlacedBetPart] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parts') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sort') }})
    
