import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class AssignSipTrunksPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AssignSipTrunksApplicationJSONSipTrunks:
    dnis: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnis') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    outbound_caller_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outbound_caller_id') }})
    

@dataclass_json
@dataclasses.dataclass
class AssignSipTrunksApplicationJSON:
    sip_trunks: Optional[list[AssignSipTrunksApplicationJSONSipTrunks]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sip_trunks') }})
    

@dataclass_json
@dataclasses.dataclass
class AssignSipTrunksMultipartFormDataSipTrunks:
    dnis: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnis') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    outbound_caller_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outbound_caller_id') }})
    

@dataclasses.dataclass
class AssignSipTrunksMultipartFormData1:
    sip_trunks: Optional[list[AssignSipTrunksMultipartFormDataSipTrunks]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'sip_trunks', 'json': True }})
    

@dataclasses.dataclass
class AssignSipTrunksRequests:
    object: Optional[AssignSipTrunksApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[AssignSipTrunksMultipartFormData1] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass_json
@dataclasses.dataclass
class AssignSipTrunks201ApplicationJSONSipTrunks:
    dnis: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnis') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    number_prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number_prefix') }})
    sip_server_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sip_server_address') }})
    

@dataclass_json
@dataclasses.dataclass
class AssignSipTrunks201ApplicationJSON:
    sip_trunks: Optional[list[AssignSipTrunks201ApplicationJSONSipTrunks]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sip_trunks') }})
    

@dataclasses.dataclass
class AssignSipTrunksRequest:
    path_params: AssignSipTrunksPathParams = dataclasses.field()
    request: Optional[AssignSipTrunksRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AssignSipTrunksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    assign_sip_trunks_201_application_json_object: Optional[AssignSipTrunks201ApplicationJSON] = dataclasses.field(default=None)
    
