import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UserPermissionPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UserPermission200ApplicationJSON:
    permissions: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    

@dataclasses.dataclass
class UserPermissionRequest:
    path_params: UserPermissionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class UserPermissionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    user_permission_200_application_json_object: Optional[UserPermission200ApplicationJSON] = dataclasses.field(default=None)
    
