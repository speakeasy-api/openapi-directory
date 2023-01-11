import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclass_json
@dataclasses.dataclass
class GroupCreateApplicationJSON:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclasses.dataclass
class GroupCreateMultipartFormData:
    name: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    

@dataclasses.dataclass
class GroupCreateRequests:
    object: Optional[GroupCreateApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[GroupCreateMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class GroupCreateSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class GroupCreate201ApplicationJSON:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    total_members: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_members') }})
    

@dataclasses.dataclass
class GroupCreateRequest:
    request: GroupCreateRequests = dataclasses.field()
    security: GroupCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GroupCreateResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    group_create_201_application_json_object: Optional[GroupCreate201ApplicationJSON] = dataclasses.field(default=None)
    
