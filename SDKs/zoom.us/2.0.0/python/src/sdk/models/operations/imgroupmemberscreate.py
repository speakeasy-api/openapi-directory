import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class ImGroupMembersCreatePathParams:
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ImGroupMembersCreateApplicationJSONMembers:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class ImGroupMembersCreateApplicationJSON:
    members: Optional[list[ImGroupMembersCreateApplicationJSONMembers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members') }})
    

@dataclass_json
@dataclasses.dataclass
class ImGroupMembersCreateMultipartFormDataMembers:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclasses.dataclass
class ImGroupMembersCreateMultipartFormData1:
    members: Optional[list[ImGroupMembersCreateMultipartFormDataMembers]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'members', 'json': True }})
    

@dataclasses.dataclass
class ImGroupMembersCreateRequests:
    object: Optional[ImGroupMembersCreateApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[ImGroupMembersCreateMultipartFormData1] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class ImGroupMembersCreateSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ImGroupMembersCreateRequest:
    path_params: ImGroupMembersCreatePathParams = dataclasses.field()
    request: ImGroupMembersCreateRequests = dataclasses.field()
    security: ImGroupMembersCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ImGroupMembersCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    im_group_members_create_201_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
