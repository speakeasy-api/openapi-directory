import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import settingvalueresponsewrapper as shared_settingvalueresponsewrapper


@dataclass_json
@dataclasses.dataclass
class SettingsBatchResponse:
    responses: Optional[list[shared_settingvalueresponsewrapper.SettingValueResponseWrapper]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responses') }})
    
