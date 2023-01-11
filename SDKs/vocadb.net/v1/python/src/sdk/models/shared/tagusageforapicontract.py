import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tagbasecontract as shared_tagbasecontract


@dataclass_json
@dataclasses.dataclass
class TagUsageForAPIContract:
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    tag: Optional[shared_tagbasecontract.TagBaseContract] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    
