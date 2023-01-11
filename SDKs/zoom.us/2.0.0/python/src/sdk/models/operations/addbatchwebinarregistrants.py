import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class AddBatchWebinarRegistrantsPathParams:
    webinar_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'webinarId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AddBatchWebinarRegistrantsApplicationJSONRegistrants:
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    first_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    last_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    

@dataclass_json
@dataclasses.dataclass
class AddBatchWebinarRegistrantsApplicationJSON:
    auto_approve: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_approve') }})
    registrants: Optional[list[AddBatchWebinarRegistrantsApplicationJSONRegistrants]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrants') }})
    

@dataclass_json
@dataclasses.dataclass
class AddBatchWebinarRegistrantsMultipartFormDataRegistrants:
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    first_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    last_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    

@dataclasses.dataclass
class AddBatchWebinarRegistrantsMultipartFormData1:
    auto_approve: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'auto_approve' }})
    registrants: Optional[list[AddBatchWebinarRegistrantsMultipartFormDataRegistrants]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'registrants', 'json': True }})
    

@dataclasses.dataclass
class AddBatchWebinarRegistrantsRequests:
    object: Optional[AddBatchWebinarRegistrantsApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[AddBatchWebinarRegistrantsMultipartFormData1] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class AddBatchWebinarRegistrantsSecurity:
    bearer: Optional[shared_security.SchemeBearer] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    o_auth: Optional[shared_security.SchemeOAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class AddBatchWebinarRegistrants200ApplicationJSONRegistrants:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    join_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('join_url') }})
    registrant_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrant_id') }})
    

@dataclass_json
@dataclasses.dataclass
class AddBatchWebinarRegistrants200ApplicationJSON:
    registrants: Optional[list[AddBatchWebinarRegistrants200ApplicationJSONRegistrants]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrants') }})
    

@dataclasses.dataclass
class AddBatchWebinarRegistrantsRequest:
    path_params: AddBatchWebinarRegistrantsPathParams = dataclasses.field()
    security: AddBatchWebinarRegistrantsSecurity = dataclasses.field()
    request: Optional[AddBatchWebinarRegistrantsRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AddBatchWebinarRegistrantsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    add_batch_webinar_registrants_200_application_json_object: Optional[AddBatchWebinarRegistrants200ApplicationJSON] = dataclasses.field(default=None)
    
