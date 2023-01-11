import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class SetUpAccountPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class SetUpAccountApplicationJSONEmergencyAddress:
    r"""SetUpAccountApplicationJSONEmergencyAddress
    Specify emergency address for the account.
    """
    
    address_line1: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('address_line1') }})
    country: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    address_line2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address_line2') }})
    city: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    state_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state_code') }})
    zip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zip') }})
    

@dataclass_json
@dataclasses.dataclass
class SetUpAccountApplicationJSON:
    emergency_address: SetUpAccountApplicationJSONEmergencyAddress = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('emergency_address') }})
    extension_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension_number') }})
    

@dataclass_json
@dataclasses.dataclass
class SetUpAccountMultipartFormDataEmergencyAddress:
    r"""SetUpAccountMultipartFormDataEmergencyAddress
    Specify emergency address for the account.
    """
    
    address_line1: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('address_line1') }})
    country: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    address_line2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address_line2') }})
    city: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    state_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state_code') }})
    zip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zip') }})
    

@dataclasses.dataclass
class SetUpAccountMultipartFormData:
    emergency_address: SetUpAccountMultipartFormDataEmergencyAddress = dataclasses.field(metadata={'multipart_form': { 'field_name': 'emergency_address', 'json': True }})
    extension_number: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'extension_number' }})
    

@dataclasses.dataclass
class SetUpAccountRequests:
    object: Optional[SetUpAccountApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[SetUpAccountMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class SetUpAccountSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class SetUpAccountRequest:
    path_params: SetUpAccountPathParams = dataclasses.field()
    security: SetUpAccountSecurity = dataclasses.field()
    request: Optional[SetUpAccountRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class SetUpAccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
