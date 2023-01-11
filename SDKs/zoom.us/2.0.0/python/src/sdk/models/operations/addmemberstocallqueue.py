import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class AddMembersToCallQueuePathParams:
    call_queue_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'callQueueId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AddMembersToCallQueueApplicationJSONMembersUsers:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class AddMembersToCallQueueApplicationJSONMembers:
    r"""AddMembersToCallQueueApplicationJSONMembers
    A maximum of 10 members can be added at a time.
    """
    
    common_area_phone_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('common_area_phone_ids') }})
    users: Optional[list[AddMembersToCallQueueApplicationJSONMembersUsers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    

@dataclass_json
@dataclasses.dataclass
class AddMembersToCallQueueApplicationJSON:
    members: Optional[AddMembersToCallQueueApplicationJSONMembers] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members') }})
    

@dataclass_json
@dataclasses.dataclass
class AddMembersToCallQueueMultipartFormDataMembersUsers:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class AddMembersToCallQueueMultipartFormDataMembers:
    r"""AddMembersToCallQueueMultipartFormDataMembers
    A maximum of 10 members can be added at a time.
    """
    
    common_area_phone_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('common_area_phone_ids') }})
    users: Optional[list[AddMembersToCallQueueMultipartFormDataMembersUsers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    

@dataclasses.dataclass
class AddMembersToCallQueueMultipartFormData:
    members: Optional[AddMembersToCallQueueMultipartFormDataMembers] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'members', 'json': True }})
    

@dataclasses.dataclass
class AddMembersToCallQueueRequests:
    object: Optional[AddMembersToCallQueueApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[AddMembersToCallQueueMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class AddMembersToCallQueueSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AddMembersToCallQueueRequest:
    path_params: AddMembersToCallQueuePathParams = dataclasses.field()
    security: AddMembersToCallQueueSecurity = dataclasses.field()
    request: Optional[AddMembersToCallQueueRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AddMembersToCallQueueResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    add_members_to_call_queue_201_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
