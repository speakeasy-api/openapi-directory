import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Tsp200ApplicationJSONDialInNumbers:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class Tsp200ApplicationJSONTspBridgeEnum(str, Enum):
    US_TSP_TB = "US_TSP_TB"
    EU_TSP_TB = "EU_TSP_TB"


@dataclass_json
@dataclasses.dataclass
class Tsp200ApplicationJSON:
    dial_in_number_unrestricted: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dial_in_number_unrestricted') }})
    dial_in_numbers: Optional[list[Tsp200ApplicationJSONDialInNumbers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dial_in_numbers') }})
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    master_account_setting_extended: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('master_account_setting_extended') }})
    modify_credential_forbidden: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modify_credential_forbidden') }})
    tsp_bridge: Optional[Tsp200ApplicationJSONTspBridgeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tsp_bridge') }})
    tsp_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tsp_enabled') }})
    tsp_provider: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tsp_provider') }})
    

@dataclasses.dataclass
class TspResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    tsp_200_application_json_object: Optional[Tsp200ApplicationJSON] = dataclasses.field(default=None)
    
