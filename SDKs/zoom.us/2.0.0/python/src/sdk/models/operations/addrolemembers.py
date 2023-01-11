import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class AddRoleMembersPathParams:
    role_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'roleId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AddRoleMembersApplicationJSONMembers:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class AddRoleMembersApplicationJSON:
    members: Optional[list[AddRoleMembersApplicationJSONMembers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members') }})
    

@dataclass_json
@dataclasses.dataclass
class AddRoleMembersMultipartFormDataMembers:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclasses.dataclass
class AddRoleMembersMultipartFormData1:
    members: Optional[list[AddRoleMembersMultipartFormDataMembers]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'members', 'json': True }})
    

@dataclasses.dataclass
class AddRoleMembersRequests:
    object: Optional[AddRoleMembersApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[AddRoleMembersMultipartFormData1] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class AddRoleMembersSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class AddRoleMembers201ApplicationJSON:
    add_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    ids: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ids') }})
    

@dataclasses.dataclass
class AddRoleMembersRequest:
    path_params: AddRoleMembersPathParams = dataclasses.field()
    request: AddRoleMembersRequests = dataclasses.field()
    security: AddRoleMembersSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AddRoleMembersResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    add_role_members_201_application_json_object: Optional[AddRoleMembers201ApplicationJSON] = dataclasses.field(default=None)
    body: Optional[bytes] = dataclasses.field(default=None)
    
