import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclass_json
@dataclasses.dataclass
class CreateRoleApplicationJSON:
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    privileges: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privileges') }})
    

@dataclasses.dataclass
class CreateRoleMultipartFormData:
    description: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'description' }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    privileges: Optional[list[str]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'privileges', 'json': True }})
    

@dataclasses.dataclass
class CreateRoleRequests:
    object: Optional[CreateRoleApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[CreateRoleMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class CreateRoleSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class CreateRole201ApplicationJSON:
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    privileges: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privileges') }})
    total_members: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_members') }})
    

@dataclasses.dataclass
class CreateRoleRequest:
    security: CreateRoleSecurity = dataclasses.field()
    request: Optional[CreateRoleRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateRoleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    create_role_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_role_201_application_json_object: Optional[CreateRole201ApplicationJSON] = dataclasses.field(default=None)
    
