import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class ListSipTrunksPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ListSipTrunks200ApplicationJSONSipTrunks:
    dnis: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnis') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    number_prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number_prefix') }})
    outbound_caller_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outbound_caller_id') }})
    sip_server_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sip_server_address') }})
    

@dataclass_json
@dataclasses.dataclass
class ListSipTrunks200ApplicationJSON:
    sip_trunks: Optional[list[ListSipTrunks200ApplicationJSONSipTrunks]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sip_trunks') }})
    total_records: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_records') }})
    

@dataclasses.dataclass
class ListSipTrunksRequest:
    path_params: ListSipTrunksPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ListSipTrunksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    list_sip_trunks_200_application_json_object: Optional[ListSipTrunks200ApplicationJSON] = dataclasses.field(default=None)
    
