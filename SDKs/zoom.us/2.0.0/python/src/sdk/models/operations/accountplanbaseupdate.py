import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class AccountPlanBaseUpdatePathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlanBaseUpdateApplicationJSON:
    r"""AccountPlanBaseUpdateApplicationJSON
    Account base plan object.
    """
    
    hosts: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hosts') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclasses.dataclass
class AccountPlanBaseUpdateMultipartFormData:
    r"""AccountPlanBaseUpdateMultipartFormData
    Account base plan object.
    """
    
    hosts: int = dataclasses.field(metadata={'multipart_form': { 'field_name': 'hosts' }})
    type: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'type' }})
    

@dataclasses.dataclass
class AccountPlanBaseUpdateRequests:
    object: Optional[AccountPlanBaseUpdateApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[AccountPlanBaseUpdateMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class AccountPlanBaseUpdateRequest:
    path_params: AccountPlanBaseUpdatePathParams = dataclasses.field()
    request: AccountPlanBaseUpdateRequests = dataclasses.field()
    

@dataclasses.dataclass
class AccountPlanBaseUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
