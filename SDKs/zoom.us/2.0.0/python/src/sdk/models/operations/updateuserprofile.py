import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class UpdateUserProfilePathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateUserProfileApplicationJSON:
    extension_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension_number') }})
    site_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('site_id') }})
    

@dataclasses.dataclass
class UpdateUserProfileMultipartFormData:
    extension_number: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'extension_number' }})
    site_id: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'site_id' }})
    

@dataclasses.dataclass
class UpdateUserProfileRequests:
    object: Optional[UpdateUserProfileApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[UpdateUserProfileMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UpdateUserProfileSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdateUserProfileRequest:
    path_params: UpdateUserProfilePathParams = dataclasses.field()
    security: UpdateUserProfileSecurity = dataclasses.field()
    request: Optional[UpdateUserProfileRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateUserProfileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    update_user_profile_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
