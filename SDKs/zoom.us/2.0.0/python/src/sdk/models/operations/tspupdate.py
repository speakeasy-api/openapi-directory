import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class TspUpdateApplicationJSONTspBridgeEnum(str, Enum):
    US_TSP_TB = "US_TSP_TB"
    EU_TSP_TB = "EU_TSP_TB"


@dataclass_json
@dataclasses.dataclass
class TspUpdateApplicationJSON:
    dial_in_number_unrestricted: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dial_in_number_unrestricted') }})
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    master_account_setting_extended: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('master_account_setting_extended') }})
    modify_credential_forbidden: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modify_credential_forbidden') }})
    tsp_bridge: Optional[TspUpdateApplicationJSONTspBridgeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tsp_bridge') }})
    tsp_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tsp_enabled') }})
    tsp_provider: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tsp_provider') }})
    
class TspUpdateMultipartFormDataTspBridgeEnum(str, Enum):
    US_TSP_TB = "US_TSP_TB"
    EU_TSP_TB = "EU_TSP_TB"


@dataclasses.dataclass
class TspUpdateMultipartFormData:
    dial_in_number_unrestricted: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'dial_in_number_unrestricted' }})
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'enable' }})
    master_account_setting_extended: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'master_account_setting_extended' }})
    modify_credential_forbidden: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'modify_credential_forbidden' }})
    tsp_bridge: Optional[TspUpdateMultipartFormDataTspBridgeEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'tsp_bridge' }})
    tsp_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'tsp_enabled' }})
    tsp_provider: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'tsp_provider' }})
    

@dataclasses.dataclass
class TspUpdateRequests:
    object: Optional[TspUpdateApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[TspUpdateMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class TspUpdateRequest:
    request: TspUpdateRequests = dataclasses.field()
    

@dataclasses.dataclass
class TspUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
