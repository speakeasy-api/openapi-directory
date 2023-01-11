import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import songinlistforapicontract as shared_songinlistforapicontract


@dataclass_json
@dataclasses.dataclass
class PartialFindResultSongInListForAPIContract:
    items: Optional[list[shared_songinlistforapicontract.SongInListForAPIContract]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    term: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('term') }})
    total_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalCount') }})
    
