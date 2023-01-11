import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GroupMembersCreatePathParams:
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GroupMembersCreateApplicationJSONMembers:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class GroupMembersCreateApplicationJSON:
    members: Optional[list[GroupMembersCreateApplicationJSONMembers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members') }})
    

@dataclass_json
@dataclasses.dataclass
class GroupMembersCreateMultipartFormDataMembers:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclasses.dataclass
class GroupMembersCreateMultipartFormData1:
    members: Optional[list[GroupMembersCreateMultipartFormDataMembers]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'members', 'json': True }})
    

@dataclasses.dataclass
class GroupMembersCreateRequests:
    object: Optional[GroupMembersCreateApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[GroupMembersCreateMultipartFormData1] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class GroupMembersCreateRequest:
    path_params: GroupMembersCreatePathParams = dataclasses.field()
    request: GroupMembersCreateRequests = dataclasses.field()
    

@dataclasses.dataclass
class GroupMembersCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    group_members_create_201_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
