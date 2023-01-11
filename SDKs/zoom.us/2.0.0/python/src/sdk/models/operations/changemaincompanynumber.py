import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclass_json
@dataclasses.dataclass
class ChangeMainCompanyNumberApplicationJSON:
    phone_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_number') }})
    

@dataclasses.dataclass
class ChangeMainCompanyNumberMultipartFormData:
    phone_number: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'phone_number' }})
    

@dataclasses.dataclass
class ChangeMainCompanyNumberRequests:
    object: Optional[ChangeMainCompanyNumberApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[ChangeMainCompanyNumberMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class ChangeMainCompanyNumberSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ChangeMainCompanyNumberRequest:
    security: ChangeMainCompanyNumberSecurity = dataclasses.field()
    request: Optional[ChangeMainCompanyNumberRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ChangeMainCompanyNumberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    change_main_company_number_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
