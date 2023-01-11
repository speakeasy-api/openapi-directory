import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import songforapicontract as shared_songforapicontract


@dataclass_json
@dataclasses.dataclass
class SongInListForAPIContract:
    notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    order: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order') }})
    song: Optional[shared_songforapicontract.SongForAPIContract] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('song') }})
    
