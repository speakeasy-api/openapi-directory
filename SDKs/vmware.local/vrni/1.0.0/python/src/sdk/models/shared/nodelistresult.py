import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import nodeid as shared_nodeid


@dataclass_json
@dataclasses.dataclass
class NodeListResult:
    results: Optional[list[shared_nodeid.NodeID]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    total_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    
