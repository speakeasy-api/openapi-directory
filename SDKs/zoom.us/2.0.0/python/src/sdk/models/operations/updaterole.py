import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class UpdateRolePathParams:
    role_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'roleId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateRoleApplicationJSONSubAccountPrivileges:
    r"""UpdateRoleApplicationJSONSubAccountPrivileges
    This field will only be displayed to accounts that are enrolled in the partner plan and follow master accounts and sub accounts structure.
    """
    
    second_level: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('second_level') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateRoleApplicationJSON:
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    privileges: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privileges') }})
    sub_account_privileges: Optional[UpdateRoleApplicationJSONSubAccountPrivileges] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sub_account_privileges') }})
    total_members: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_members') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateRoleMultipartFormDataSubAccountPrivileges:
    r"""UpdateRoleMultipartFormDataSubAccountPrivileges
    This field will only be displayed to accounts that are enrolled in the partner plan and follow master accounts and sub accounts structure.
    """
    
    second_level: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('second_level') }})
    

@dataclasses.dataclass
class UpdateRoleMultipartFormData:
    description: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'description' }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'id' }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    privileges: Optional[list[str]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'privileges', 'json': True }})
    sub_account_privileges: Optional[UpdateRoleMultipartFormDataSubAccountPrivileges] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'sub_account_privileges', 'json': True }})
    total_members: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'total_members' }})
    

@dataclasses.dataclass
class UpdateRoleRequests:
    object: Optional[UpdateRoleApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[UpdateRoleMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UpdateRoleSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdateRoleRequest:
    path_params: UpdateRolePathParams = dataclasses.field()
    security: UpdateRoleSecurity = dataclasses.field()
    request: Optional[UpdateRoleRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateRoleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    update_role_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
