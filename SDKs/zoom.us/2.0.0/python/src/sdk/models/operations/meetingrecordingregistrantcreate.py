import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class MeetingRecordingRegistrantCreatePathParams:
    meeting_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'meetingId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class MeetingRecordingRegistrantCreateApplicationJSONCustomQuestions:
    r"""MeetingRecordingRegistrantCreateApplicationJSONCustomQuestions
    Custom Question.
    """
    
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class MeetingRecordingRegistrantCreateApplicationJSON:
    r"""MeetingRecordingRegistrantCreateApplicationJSON
    Registrant base object.
    """
    
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    first_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    city: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    comments: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    custom_questions: Optional[list[MeetingRecordingRegistrantCreateApplicationJSONCustomQuestions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_questions') }})
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
class MeetingRecordingRegistrantCreateMultipartFormDataCustomQuestions:
    r"""MeetingRecordingRegistrantCreateMultipartFormDataCustomQuestions
    Custom Question.
    """
    
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclasses.dataclass
class MeetingRecordingRegistrantCreateMultipartFormData1:
    r"""MeetingRecordingRegistrantCreateMultipartFormData1
    Registrant base object.
    """
    
    email: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'email' }})
    first_name: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'first_name' }})
    address: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'address' }})
    city: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'city' }})
    comments: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'comments' }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'country' }})
    custom_questions: Optional[list[MeetingRecordingRegistrantCreateMultipartFormDataCustomQuestions]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'custom_questions', 'json': True }})
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
class MeetingRecordingRegistrantCreateRequests:
    object: Optional[MeetingRecordingRegistrantCreateApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[MeetingRecordingRegistrantCreateMultipartFormData1] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class MeetingRecordingRegistrantCreateSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class MeetingRecordingRegistrantCreate201ApplicationJSON:
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    registrant_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrant_id') }})
    share_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('share_url') }})
    topic: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    

@dataclasses.dataclass
class MeetingRecordingRegistrantCreateRequest:
    path_params: MeetingRecordingRegistrantCreatePathParams = dataclasses.field()
    request: MeetingRecordingRegistrantCreateRequests = dataclasses.field()
    security: MeetingRecordingRegistrantCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class MeetingRecordingRegistrantCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    meeting_recording_registrant_create_201_application_json_object: Optional[MeetingRecordingRegistrantCreate201ApplicationJSON] = dataclasses.field(default=None)
    
