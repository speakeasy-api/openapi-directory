import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetAdminRequestsUnmatchedNearMisses200ApplicationJSONNearMisses:
    absolute_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('absoluteUrl') }})
    body: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    cookies: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookies') }})
    headers: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    method: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAdminRequestsUnmatchedNearMisses200ApplicationJSON:
    near_misses: Optional[list[GetAdminRequestsUnmatchedNearMisses200ApplicationJSONNearMisses]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nearMisses') }})
    

@dataclasses.dataclass
class GetAdminRequestsUnmatchedNearMissesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_admin_requests_unmatched_near_misses_200_application_json_object: Optional[GetAdminRequestsUnmatchedNearMisses200ApplicationJSON] = dataclasses.field(default=None)
    
