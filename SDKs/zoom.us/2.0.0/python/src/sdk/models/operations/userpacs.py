import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UserPaCsPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UserPaCs200ApplicationJSONPacAccountsDedicatedDialInNumber:
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    

@dataclass_json
@dataclasses.dataclass
class UserPaCs200ApplicationJSONPacAccountsGlobalDialInNumbers:
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    

@dataclass_json
@dataclasses.dataclass
class UserPaCs200ApplicationJSONPacAccounts:
    conference_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conference_id') }})
    dedicated_dial_in_number: Optional[list[UserPaCs200ApplicationJSONPacAccountsDedicatedDialInNumber]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dedicated_dial_in_number') }})
    global_dial_in_numbers: Optional[list[UserPaCs200ApplicationJSONPacAccountsGlobalDialInNumbers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('global_dial_in_numbers') }})
    listen_only_password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listen_only_password') }})
    participant_password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('participant_password') }})
    

@dataclass_json
@dataclasses.dataclass
class UserPaCs200ApplicationJSON:
    pac_accounts: Optional[list[UserPaCs200ApplicationJSONPacAccounts]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pac_accounts') }})
    

@dataclasses.dataclass
class UserPaCsRequest:
    path_params: UserPaCsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class UserPaCsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    user_pa_cs_200_application_json_object: Optional[UserPaCs200ApplicationJSON] = dataclasses.field(default=None)
    
