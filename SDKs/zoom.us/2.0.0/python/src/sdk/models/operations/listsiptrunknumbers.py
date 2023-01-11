import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class ListSipTrunkNumbersSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class ListSipTrunkNumbers200ApplicationJSONPhoneNumbers:
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    

@dataclass_json
@dataclasses.dataclass
class ListSipTrunkNumbers200ApplicationJSON:
    phone_numbers: Optional[list[ListSipTrunkNumbers200ApplicationJSONPhoneNumbers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_numbers') }})
    total_records: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_records') }})
    

@dataclasses.dataclass
class ListSipTrunkNumbersRequest:
    security: ListSipTrunkNumbersSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListSipTrunkNumbersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    list_sip_trunk_numbers_200_application_json_object: Optional[ListSipTrunkNumbers200ApplicationJSON] = dataclasses.field(default=None)
    
