import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import releaseeventseriesforapicontract as shared_releaseeventseriesforapicontract


@dataclass_json
@dataclasses.dataclass
class PartialFindResultReleaseEventSeriesForAPIContract:
    items: Optional[list[shared_releaseeventseriesforapicontract.ReleaseEventSeriesForAPIContract]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    term: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('term') }})
    total_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalCount') }})
    
