import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class WebinarRegistrantQuestionUpdatePathParams:
    webinar_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'webinarId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class WebinarRegistrantQuestionUpdateWebinarRegistrantQuestions:
    r"""WebinarRegistrantQuestionUpdateWebinarRegistrantQuestions
    Webinar Registrant Questions
    """
    
    custom_questions: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_questions') }, 'multipart_form': { 'field_name': 'custom_questions', 'json': True }})
    questions: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('questions') }, 'multipart_form': { 'field_name': 'questions', 'json': True }})
    

@dataclasses.dataclass
class WebinarRegistrantQuestionUpdateRequests:
    webinar_registrant_questions: Optional[WebinarRegistrantQuestionUpdateWebinarRegistrantQuestions] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    webinar_registrant_questions1: Optional[WebinarRegistrantQuestionUpdateWebinarRegistrantQuestions] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class WebinarRegistrantQuestionUpdateSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class WebinarRegistrantQuestionUpdateRequest:
    path_params: WebinarRegistrantQuestionUpdatePathParams = dataclasses.field()
    request: WebinarRegistrantQuestionUpdateRequests = dataclasses.field()
    security: WebinarRegistrantQuestionUpdateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class WebinarRegistrantQuestionUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
