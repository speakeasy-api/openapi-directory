import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class ChangeParentLocationPathParams:
    location_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'locationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ChangeParentLocationApplicationJSON:
    parent_location_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent_location_id') }})
    

@dataclasses.dataclass
class ChangeParentLocationMultipartFormData:
    parent_location_id: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'parent_location_id' }})
    

@dataclasses.dataclass
class ChangeParentLocationRequests:
    object: Optional[ChangeParentLocationApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[ChangeParentLocationMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class ChangeParentLocationSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ChangeParentLocationRequest:
    path_params: ChangeParentLocationPathParams = dataclasses.field()
    security: ChangeParentLocationSecurity = dataclasses.field()
    request: Optional[ChangeParentLocationRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ChangeParentLocationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    change_parent_location_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
