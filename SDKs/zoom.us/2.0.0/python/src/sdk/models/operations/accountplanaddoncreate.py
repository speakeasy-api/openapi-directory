import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class AccountPlanAddonCreatePathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlanAddonCreateApplicationJSON1:
    r"""AccountPlanAddonCreateApplicationJSON1
    Account plan object.
    """
    
    hosts: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hosts') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlanAddonCreateApplicationJSON2PhonePlanPlanBase:
    r"""AccountPlanAddonCreateApplicationJSON2PhonePlanPlanBase
    Additional phone base plans.
    """
    
    callout_countries: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callout_countries') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlanAddonCreateApplicationJSON2PhonePlanPlanCalling:
    hosts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hosts') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlanAddonCreateApplicationJSON2PhonePlanPlanNumber:
    hosts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hosts') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlanAddonCreateApplicationJSON2PhonePlan:
    r"""AccountPlanAddonCreateApplicationJSON2PhonePlan
    Phone Plan Object
    """
    
    plan_base: Optional[AccountPlanAddonCreateApplicationJSON2PhonePlanPlanBase] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_base') }})
    plan_calling: Optional[list[AccountPlanAddonCreateApplicationJSON2PhonePlanPlanCalling]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_calling') }})
    plan_number: Optional[list[AccountPlanAddonCreateApplicationJSON2PhonePlanPlanNumber]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_number') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlanAddonCreateApplicationJSON2:
    r"""AccountPlanAddonCreateApplicationJSON2
    Zoom Phone Plan Object
    """
    
    plan_details: AccountPlanAddonCreateApplicationJSON2PhonePlan = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_details') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclasses.dataclass
class AccountPlanAddonCreateMultipartFormData1:
    r"""AccountPlanAddonCreateMultipartFormData1
    Account plan object.
    """
    
    hosts: int = dataclasses.field(metadata={'multipart_form': { 'field_name': 'hosts' }})
    type: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'type' }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlanAddonCreateMultipartFormData2PhonePlanPlanBase:
    r"""AccountPlanAddonCreateMultipartFormData2PhonePlanPlanBase
    Additional phone base plans.
    """
    
    callout_countries: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callout_countries') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlanAddonCreateMultipartFormData2PhonePlanPlanCalling:
    hosts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hosts') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlanAddonCreateMultipartFormData2PhonePlanPlanNumber:
    hosts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hosts') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlanAddonCreateMultipartFormData2PhonePlan:
    r"""AccountPlanAddonCreateMultipartFormData2PhonePlan
    Phone Plan Object
    """
    
    plan_base: Optional[AccountPlanAddonCreateMultipartFormData2PhonePlanPlanBase] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_base') }})
    plan_calling: Optional[list[AccountPlanAddonCreateMultipartFormData2PhonePlanPlanCalling]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_calling') }})
    plan_number: Optional[list[AccountPlanAddonCreateMultipartFormData2PhonePlanPlanNumber]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_number') }})
    

@dataclasses.dataclass
class AccountPlanAddonCreateMultipartFormData2:
    r"""AccountPlanAddonCreateMultipartFormData2
    Zoom Phone Plan Object
    """
    
    plan_details: AccountPlanAddonCreateMultipartFormData2PhonePlan = dataclasses.field(metadata={'multipart_form': { 'field_name': 'plan_details', 'json': True }})
    type: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'type' }})
    

@dataclasses.dataclass
class AccountPlanAddonCreateRequests:
    one_of: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    one_of1: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class AccountPlanAddonCreateRequest:
    path_params: AccountPlanAddonCreatePathParams = dataclasses.field()
    request: AccountPlanAddonCreateRequests = dataclasses.field()
    

@dataclasses.dataclass
class AccountPlanAddonCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
