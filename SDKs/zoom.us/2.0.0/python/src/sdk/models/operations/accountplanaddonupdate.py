import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class AccountPlanAddonUpdatePathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlanAddonUpdateApplicationJSON:
    r"""AccountPlanAddonUpdateApplicationJSON
    Account plan object.
    """
    
    hosts: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hosts') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclasses.dataclass
class AccountPlanAddonUpdateMultipartFormData:
    r"""AccountPlanAddonUpdateMultipartFormData
    Account plan object.
    """
    
    hosts: int = dataclasses.field(metadata={'multipart_form': { 'field_name': 'hosts' }})
    type: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'type' }})
    

@dataclasses.dataclass
class AccountPlanAddonUpdateRequests:
    object: Optional[AccountPlanAddonUpdateApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[AccountPlanAddonUpdateMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class AccountPlanAddonUpdateRequest:
    path_params: AccountPlanAddonUpdatePathParams = dataclasses.field()
    request: AccountPlanAddonUpdateRequests = dataclasses.field()
    

@dataclasses.dataclass
class AccountPlanAddonUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
