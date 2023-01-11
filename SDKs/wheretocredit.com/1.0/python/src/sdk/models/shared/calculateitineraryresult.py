import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import calculateitineraryprogramresult as shared_calculateitineraryprogramresult


@dataclass_json
@dataclasses.dataclass
class CalculateItineraryResult:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    totals: Optional[list[shared_calculateitineraryprogramresult.CalculateItineraryProgramResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totals') }})
    
