import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class AccountBillingUpdatePathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AccountBillingUpdateApplicationJSON:
    r"""AccountBillingUpdateApplicationJSON
    Billing Contact object.
    """
    
    address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    apt: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apt') }})
    city: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    first_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    last_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    phone_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_number') }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    zip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zip') }})
    

@dataclasses.dataclass
class AccountBillingUpdateMultipartFormData:
    r"""AccountBillingUpdateMultipartFormData
    Billing Contact object.
    """
    
    address: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'address' }})
    apt: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'apt' }})
    city: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'city' }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'country' }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'email' }})
    first_name: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'first_name' }})
    last_name: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'last_name' }})
    phone_number: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'phone_number' }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'state' }})
    zip: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'zip' }})
    

@dataclasses.dataclass
class AccountBillingUpdateRequests:
    object: Optional[AccountBillingUpdateApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[AccountBillingUpdateMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class AccountBillingUpdateRequest:
    path_params: AccountBillingUpdatePathParams = dataclasses.field()
    request: AccountBillingUpdateRequests = dataclasses.field()
    

@dataclasses.dataclass
class AccountBillingUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
