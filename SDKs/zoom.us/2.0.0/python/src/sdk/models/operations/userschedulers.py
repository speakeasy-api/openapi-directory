import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class UserSchedulersPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UserSchedulersSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class UserSchedulersUserSchedulersListSchedulers:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    pmi: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pmi') }})
    

@dataclass_json
@dataclasses.dataclass
class UserSchedulersUserSchedulersList:
    r"""UserSchedulersUserSchedulersList
    List of user's schedulers.
    """
    
    schedulers: Optional[list[UserSchedulersUserSchedulersListSchedulers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedulers') }})
    

@dataclasses.dataclass
class UserSchedulersRequest:
    path_params: UserSchedulersPathParams = dataclasses.field()
    security: UserSchedulersSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UserSchedulersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    user_schedulers_list: Optional[UserSchedulersUserSchedulersList] = dataclasses.field(default=None)
    
