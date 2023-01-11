import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class MeetingRegistrantCreatePathParams:
    meeting_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'meetingId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MeetingRegistrantCreateQueryParams:
    occurrence_ids: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'occurrence_ids', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class MeetingRegistrantCreateApplicationJSONCustomQuestions:
    r"""MeetingRegistrantCreateApplicationJSONCustomQuestions
    Custom Question.
    """
    
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class MeetingRegistrantCreateApplicationJSON:
    r"""MeetingRegistrantCreateApplicationJSON
    Registrant base object.
    """
    
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    first_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    auto_approve: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_approve') }})
    city: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    comments: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    custom_questions: Optional[list[MeetingRegistrantCreateApplicationJSONCustomQuestions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_questions') }})
    industry: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('industry') }})
    job_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('job_title') }})
    language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
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
class MeetingRegistrantCreateMultipartFormDataCustomQuestions:
    r"""MeetingRegistrantCreateMultipartFormDataCustomQuestions
    Custom Question.
    """
    
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclasses.dataclass
class MeetingRegistrantCreateMultipartFormData1:
    r"""MeetingRegistrantCreateMultipartFormData1
    Registrant base object.
    """
    
    email: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'email' }})
    first_name: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'first_name' }})
    address: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'address' }})
    auto_approve: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'auto_approve' }})
    city: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'city' }})
    comments: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'comments' }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'country' }})
    custom_questions: Optional[list[MeetingRegistrantCreateMultipartFormDataCustomQuestions]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'custom_questions', 'json': True }})
    industry: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'industry' }})
    job_title: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'job_title' }})
    language: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'language' }})
    last_name: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'last_name' }})
    no_of_employees: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'no_of_employees' }})
    org: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'org' }})
    phone: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'phone' }})
    purchasing_time_frame: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'purchasing_time_frame' }})
    role_in_purchase_process: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'role_in_purchase_process' }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'state' }})
    zip: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'zip' }})
    

@dataclasses.dataclass
class MeetingRegistrantCreateRequests:
    object: Optional[MeetingRegistrantCreateApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[MeetingRegistrantCreateMultipartFormData1] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class MeetingRegistrantCreateSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class MeetingRegistrantCreate201ApplicationJSON:
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    join_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('join_url') }})
    registrant_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrant_id') }})
    start_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_time') }})
    topic: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    

@dataclasses.dataclass
class MeetingRegistrantCreateRequest:
    path_params: MeetingRegistrantCreatePathParams = dataclasses.field()
    query_params: MeetingRegistrantCreateQueryParams = dataclasses.field()
    request: MeetingRegistrantCreateRequests = dataclasses.field()
    security: MeetingRegistrantCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class MeetingRegistrantCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    meeting_registrant_create_201_application_json_object: Optional[MeetingRegistrantCreate201ApplicationJSON] = dataclasses.field(default=None)
    
