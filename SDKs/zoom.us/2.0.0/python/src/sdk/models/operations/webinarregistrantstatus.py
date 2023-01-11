import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class WebinarRegistrantStatusPathParams:
    webinar_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'webinarId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class WebinarRegistrantStatusQueryParams:
    occurrence_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'occurrence_id', 'style': 'form', 'explode': True }})
    
class WebinarRegistrantStatusApplicationJSONActionEnum(str, Enum):
    APPROVE = "approve"
    CANCEL = "cancel"
    DENY = "deny"


@dataclass_json
@dataclasses.dataclass
class WebinarRegistrantStatusApplicationJSONRegistrants:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class WebinarRegistrantStatusApplicationJSON:
    action: WebinarRegistrantStatusApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    registrants: Optional[list[WebinarRegistrantStatusApplicationJSONRegistrants]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrants') }})
    
class WebinarRegistrantStatusMultipartFormDataActionEnum(str, Enum):
    APPROVE = "approve"
    CANCEL = "cancel"
    DENY = "deny"


@dataclass_json
@dataclasses.dataclass
class WebinarRegistrantStatusMultipartFormDataRegistrants:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclasses.dataclass
class WebinarRegistrantStatusMultipartFormData1:
    action: WebinarRegistrantStatusMultipartFormDataActionEnum = dataclasses.field(metadata={'multipart_form': { 'field_name': 'action' }})
    registrants: Optional[list[WebinarRegistrantStatusMultipartFormDataRegistrants]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'registrants', 'json': True }})
    

@dataclasses.dataclass
class WebinarRegistrantStatusRequests:
    object: Optional[WebinarRegistrantStatusApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[WebinarRegistrantStatusMultipartFormData1] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class WebinarRegistrantStatusSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class WebinarRegistrantStatusRequest:
    path_params: WebinarRegistrantStatusPathParams = dataclasses.field()
    query_params: WebinarRegistrantStatusQueryParams = dataclasses.field()
    request: WebinarRegistrantStatusRequests = dataclasses.field()
    security: WebinarRegistrantStatusSecurity = dataclasses.field()
    

@dataclasses.dataclass
class WebinarRegistrantStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
