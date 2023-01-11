import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class UpdatePhoneNumberDetailsPathParams:
    number_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'numberId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdatePhoneNumberDetailsApplicationJSON:
    capability: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capability') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    

@dataclasses.dataclass
class UpdatePhoneNumberDetailsMultipartFormData:
    capability: Optional[list[str]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'capability', 'json': True }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'display_name' }})
    

@dataclasses.dataclass
class UpdatePhoneNumberDetailsRequests:
    object: Optional[UpdatePhoneNumberDetailsApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[UpdatePhoneNumberDetailsMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UpdatePhoneNumberDetailsSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdatePhoneNumberDetailsRequest:
    path_params: UpdatePhoneNumberDetailsPathParams = dataclasses.field()
    security: UpdatePhoneNumberDetailsSecurity = dataclasses.field()
    request: Optional[UpdatePhoneNumberDetailsRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdatePhoneNumberDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    update_phone_number_details_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
