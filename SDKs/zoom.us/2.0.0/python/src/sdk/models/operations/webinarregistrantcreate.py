import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class WebinarRegistrantCreatePathParams:
    webinar_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'webinarId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class WebinarRegistrantCreateQueryParams:
    occurrence_ids: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'occurrence_ids', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class WebinarRegistrantCreateApplicationJSONCustomQuestions:
    r"""WebinarRegistrantCreateApplicationJSONCustomQuestions
    Custom Question.
    """
    
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class WebinarRegistrantCreateApplicationJSON:
    r"""WebinarRegistrantCreateApplicationJSON
    Registrant base object.
    """
    
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    first_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    city: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    comments: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    custom_questions: Optional[list[WebinarRegistrantCreateApplicationJSONCustomQuestions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_questions') }})
    industry: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('industry') }})
    job_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('job_title') }})
    last_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    no_of_employees: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('no_of_employees') }})
    org: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('org') }})
    phone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone') }})
    purchasing_time_frame: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchasing_time_frame') }})
    role_in_purchase_process: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role_in_purchase_process') }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    zip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zip') }})
    

@dataclass_json
@dataclasses.dataclass
class WebinarRegistrantCreateMultipartFormDataCustomQuestions:
    r"""WebinarRegistrantCreateMultipartFormDataCustomQuestions
    Custom Question.
    """
    
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclasses.dataclass
class WebinarRegistrantCreateMultipartFormData1:
    r"""WebinarRegistrantCreateMultipartFormData1
    Registrant base object.
    """
    
    email: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'email' }})
    first_name: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'first_name' }})
    address: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'address' }})
    city: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'city' }})
    comments: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'comments' }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'country' }})
    custom_questions: Optional[list[WebinarRegistrantCreateMultipartFormDataCustomQuestions]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'custom_questions', 'json': True }})
    industry: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'industry' }})
    job_title: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'job_title' }})
    last_name: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'last_name' }})
    no_of_employees: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'no_of_employees' }})
    org: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'org' }})
    phone: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'phone' }})
    purchasing_time_frame: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'purchasing_time_frame' }})
    role_in_purchase_process: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'role_in_purchase_process' }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'state' }})
    zip: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'zip' }})
    

@dataclasses.dataclass
class WebinarRegistrantCreateRequests:
    object: Optional[WebinarRegistrantCreateApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[WebinarRegistrantCreateMultipartFormData1] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class WebinarRegistrantCreateSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class WebinarRegistrantCreate201ApplicationJSON:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    join_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('join_url') }})
    registrant_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrant_id') }})
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    topic: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    

@dataclasses.dataclass
class WebinarRegistrantCreateRequest:
    path_params: WebinarRegistrantCreatePathParams = dataclasses.field()
    query_params: WebinarRegistrantCreateQueryParams = dataclasses.field()
    request: WebinarRegistrantCreateRequests = dataclasses.field()
    security: WebinarRegistrantCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class WebinarRegistrantCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    webinar_registrant_create_201_application_json_object: Optional[WebinarRegistrantCreate201ApplicationJSON] = dataclasses.field(default=None)
    
