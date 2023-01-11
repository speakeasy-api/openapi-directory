import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ratedsongforuserforapicontract as shared_ratedsongforuserforapicontract


@dataclass_json
@dataclasses.dataclass
class PartialFindResultRatedSongForUserForAPIContract:
    items: Optional[list[shared_ratedsongforuserforapicontract.RatedSongForUserForAPIContract]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    term: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('term') }})
    total_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalCount') }})
    
