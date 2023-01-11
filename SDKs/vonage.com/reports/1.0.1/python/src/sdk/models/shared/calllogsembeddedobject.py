import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import calllog as shared_calllog


@dataclass_json
@dataclasses.dataclass
class CallLogsEmbeddedObject:
    call_logs: Optional[list[shared_calllog.CallLog]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('call_logs') }})
    
