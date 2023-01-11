import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class UpdateCallQueuePathParams:
    call_queue_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'callQueueId', 'style': 'simple', 'explode': False }})
    
class UpdateCallQueueApplicationJSONStatusEnum(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"


@dataclass_json
@dataclasses.dataclass
class UpdateCallQueueApplicationJSON:
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    extension_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension_number') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    site_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('site_id') }})
    status: Optional[UpdateCallQueueApplicationJSONStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    timezone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    
class UpdateCallQueueMultipartFormDataStatusEnum(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"


@dataclasses.dataclass
class UpdateCallQueueMultipartFormData:
    description: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'description' }})
    extension_number: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'extension_number' }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    site_id: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'site_id' }})
    status: Optional[UpdateCallQueueMultipartFormDataStatusEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'status' }})
    timezone: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'timezone' }})
    

@dataclasses.dataclass
class UpdateCallQueueRequests:
    object: Optional[UpdateCallQueueApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[UpdateCallQueueMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UpdateCallQueueSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdateCallQueueRequest:
    path_params: UpdateCallQueuePathParams = dataclasses.field()
    security: UpdateCallQueueSecurity = dataclasses.field()
    request: Optional[UpdateCallQueueRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateCallQueueResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    update_call_queue_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
