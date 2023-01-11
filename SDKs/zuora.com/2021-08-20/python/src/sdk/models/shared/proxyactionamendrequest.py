import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import amendrequest as shared_amendrequest


@dataclass_json
@dataclasses.dataclass
class ProxyActionamendRequest:
    requests: Optional[list[shared_amendrequest.AmendRequest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requests') }})
    
