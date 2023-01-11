import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import settingvaluerequest as shared_settingvaluerequest


@dataclass_json
@dataclasses.dataclass
class SettingsBatchRequest:
    requests: Optional[list[shared_settingvaluerequest.SettingValueRequest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requests') }})
    
