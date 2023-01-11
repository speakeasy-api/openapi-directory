import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclass_json
@dataclasses.dataclass
class CreateCallQueueApplicationJSONMembersUsers:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateCallQueueApplicationJSONMembers:
    r"""CreateCallQueueApplicationJSONMembers
    A list of one or more phone users to be included in the call queue. Provide either users or common area phone(s). Provide at least one user in the users object.
    """
    
    common_area_phone_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('common_area_phone_ids') }})
    users: Optional[list[CreateCallQueueApplicationJSONMembersUsers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateCallQueueApplicationJSON:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    site_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('site_id') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    extension_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension_number') }})
    members: Optional[CreateCallQueueApplicationJSONMembers] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateCallQueueMultipartFormDataMembersUsers:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateCallQueueMultipartFormDataMembers:
    r"""CreateCallQueueMultipartFormDataMembers
    A list of one or more phone users to be included in the call queue. Provide either users or common area phone(s). Provide at least one user in the users object.
    """
    
    common_area_phone_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('common_area_phone_ids') }})
    users: Optional[list[CreateCallQueueMultipartFormDataMembersUsers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    

@dataclasses.dataclass
class CreateCallQueueMultipartFormData:
    name: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'name' }})
    site_id: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'site_id' }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'description' }})
    extension_number: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'extension_number' }})
    members: Optional[CreateCallQueueMultipartFormDataMembers] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'members', 'json': True }})
    

@dataclasses.dataclass
class CreateCallQueueRequests:
    object: Optional[CreateCallQueueApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[CreateCallQueueMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class CreateCallQueueSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class CreateCallQueue201ApplicationJSON:
    extension_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension_number') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class CreateCallQueueRequest:
    security: CreateCallQueueSecurity = dataclasses.field()
    request: Optional[CreateCallQueueRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateCallQueueResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    create_call_queue_201_application_json_object: Optional[CreateCallQueue201ApplicationJSON] = dataclasses.field(default=None)
    
