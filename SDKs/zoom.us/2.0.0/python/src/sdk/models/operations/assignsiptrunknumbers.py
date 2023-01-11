import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class AssignSipTrunkNumbersPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AssignSipTrunkNumbersApplicationJSON:
    phone_numbers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_numbers') }})
    

@dataclasses.dataclass
class AssignSipTrunkNumbersMultipartFormData:
    phone_numbers: Optional[list[str]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'phone_numbers', 'json': True }})
    

@dataclasses.dataclass
class AssignSipTrunkNumbersRequests:
    object: Optional[AssignSipTrunkNumbersApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[AssignSipTrunkNumbersMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class AssignSipTrunkNumbersSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AssignSipTrunkNumbersRequest:
    path_params: AssignSipTrunkNumbersPathParams = dataclasses.field()
    security: AssignSipTrunkNumbersSecurity = dataclasses.field()
    request: Optional[AssignSipTrunkNumbersRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AssignSipTrunkNumbersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    assign_sip_trunk_numbers_201_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
