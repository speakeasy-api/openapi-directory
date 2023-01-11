import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UserVanityNameQueryParams:
    vanity_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'vanity_name', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class UserVanityName200ApplicationJSON:
    existed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('existed') }})
    

@dataclasses.dataclass
class UserVanityNameRequest:
    query_params: UserVanityNameQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class UserVanityNameResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    user_vanity_name_200_application_json_object: Optional[UserVanityName200ApplicationJSON] = dataclasses.field(default=None)
    
