import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class AccountBillingPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AccountBilling200ApplicationJSON:
    r"""AccountBilling200ApplicationJSON
    Billing Contact object.
    """
    
    address: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    city: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    first_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    last_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    phone_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_number') }})
    state: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    zip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('zip') }})
    apt: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apt') }})
    

@dataclasses.dataclass
class AccountBillingRequest:
    path_params: AccountBillingPathParams = dataclasses.field()
    

@dataclasses.dataclass
class AccountBillingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    account_billing_200_application_json_object: Optional[AccountBilling200ApplicationJSON] = dataclasses.field(default=None)
    
