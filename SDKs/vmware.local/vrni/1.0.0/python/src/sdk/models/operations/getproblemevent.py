import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import apierror as shared_apierror
from ..shared import problemevent as shared_problemevent


@dataclasses.dataclass
class GetProblemEventPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetProblemEventQueryParams:
    time: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetProblemEventSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetProblemEventRequest:
    path_params: GetProblemEventPathParams = dataclasses.field()
    query_params: GetProblemEventQueryParams = dataclasses.field()
    security: GetProblemEventSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetProblemEventResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    problem_event: Optional[shared_problemevent.ProblemEvent] = dataclasses.field(default=None)
    
