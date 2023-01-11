import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import applicationrequest as shared_applicationrequest
from ..shared import apierror as shared_apierror
from ..shared import application as shared_application


@dataclasses.dataclass
class AddApplicationSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class AddApplicationRequest:
    request: shared_applicationrequest.ApplicationRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: AddApplicationSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AddApplicationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    application: Optional[shared_application.Application] = dataclasses.field(default=None)
    
