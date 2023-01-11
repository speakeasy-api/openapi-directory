import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import getcallouthistoryvotype as shared_getcallouthistoryvotype


@dataclass_json
@dataclasses.dataclass
class GetCalloutHistoryVOsType:
    callout_histories: Optional[list[shared_getcallouthistoryvotype.GetCalloutHistoryVoType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calloutHistories') }})
    next_page: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPage') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    
