import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetAdminScenarios200ApplicationJSONScenarios:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    possible_states: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('possibleStates') }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAdminScenarios200ApplicationJSON:
    scenarios: Optional[list[GetAdminScenarios200ApplicationJSONScenarios]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scenarios') }})
    

@dataclasses.dataclass
class GetAdminScenariosResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_admin_scenarios_200_application_json_object: Optional[GetAdminScenarios200ApplicationJSON] = dataclasses.field(default=None)
    
