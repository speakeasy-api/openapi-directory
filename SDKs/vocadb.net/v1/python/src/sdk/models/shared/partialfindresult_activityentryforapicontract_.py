import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import activityentryforapicontract as shared_activityentryforapicontract


@dataclass_json
@dataclasses.dataclass
class PartialFindResultActivityEntryForAPIContract:
    items: Optional[list[shared_activityentryforapicontract.ActivityEntryForAPIContract]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    term: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('term') }})
    total_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalCount') }})
    
