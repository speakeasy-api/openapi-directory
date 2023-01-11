import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class WebinarRegistrantsQuestionsGetPathParams:
    webinar_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'webinarId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class WebinarRegistrantsQuestionsGetSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class WebinarRegistrantsQuestionsGetWebinarRegistrantQuestions:
    r"""WebinarRegistrantsQuestionsGetWebinarRegistrantQuestions
    Webinar Registrant Questions
    """
    
    custom_questions: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_questions') }})
    questions: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('questions') }})
    

@dataclasses.dataclass
class WebinarRegistrantsQuestionsGetRequest:
    path_params: WebinarRegistrantsQuestionsGetPathParams = dataclasses.field()
    security: WebinarRegistrantsQuestionsGetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class WebinarRegistrantsQuestionsGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    webinar_registrant_questions: Optional[WebinarRegistrantsQuestionsGetWebinarRegistrantQuestions] = dataclasses.field(default=None)
    
