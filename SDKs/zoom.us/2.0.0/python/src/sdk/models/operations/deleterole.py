import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteRolePathParams:
    role_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'roleId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteRoleSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteRoleRequest:
    path_params: DeleteRolePathParams = dataclasses.field()
    security: DeleteRoleSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteRoleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    delete_role_204_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
