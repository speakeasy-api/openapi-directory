import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import settingitemwithoperationsinformation as shared_settingitemwithoperationsinformation


@dataclass_json
@dataclasses.dataclass
class ListAllSettingsResponse:
    settings: Optional[list[shared_settingitemwithoperationsinformation.SettingItemWithOperationsInformation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    
