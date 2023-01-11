import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdatePresenceStatusPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    
class UpdatePresenceStatusApplicationJSONStatusEnum(str, Enum):
    DO_NO_DISTURB = "Do_No_Disturb"
    AWAY = "Away"
    AVAILABLE = "Available"


@dataclass_json
@dataclasses.dataclass
class UpdatePresenceStatusApplicationJSON:
    duration: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    status: Optional[UpdatePresenceStatusApplicationJSONStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
class UpdatePresenceStatusMultipartFormDataStatusEnum(str, Enum):
    DO_NO_DISTURB = "Do_No_Disturb"
    AWAY = "Away"
    AVAILABLE = "Available"


@dataclasses.dataclass
class UpdatePresenceStatusMultipartFormData:
    duration: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'duration' }})
    status: Optional[UpdatePresenceStatusMultipartFormDataStatusEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'status' }})
    

@dataclasses.dataclass
class UpdatePresenceStatusRequests:
    object: Optional[UpdatePresenceStatusApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[UpdatePresenceStatusMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UpdatePresenceStatusRequest:
    path_params: UpdatePresenceStatusPathParams = dataclasses.field()
    request: Optional[UpdatePresenceStatusRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdatePresenceStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    update_presence_status_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
