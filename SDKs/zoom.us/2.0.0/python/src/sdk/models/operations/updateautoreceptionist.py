import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class UpdateAutoReceptionistPathParams:
    auto_receptionist_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'autoReceptionistId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateAutoReceptionistApplicationJSON:
    extension_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension_number') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclasses.dataclass
class UpdateAutoReceptionistMultipartFormData:
    extension_number: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'extension_number' }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    

@dataclasses.dataclass
class UpdateAutoReceptionistRequests:
    object: Optional[UpdateAutoReceptionistApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[UpdateAutoReceptionistMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UpdateAutoReceptionistSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdateAutoReceptionistRequest:
    path_params: UpdateAutoReceptionistPathParams = dataclasses.field()
    security: UpdateAutoReceptionistSecurity = dataclasses.field()
    request: Optional[UpdateAutoReceptionistRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateAutoReceptionistResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    update_auto_receptionist_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
