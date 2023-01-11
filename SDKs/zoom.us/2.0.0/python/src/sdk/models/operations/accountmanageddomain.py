import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class AccountManagedDomainPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AccountManagedDomainSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class AccountManagedDomain200ApplicationJSONDomains:
    domain: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountManagedDomain200ApplicationJSON:
    r"""AccountManagedDomain200ApplicationJSON
    List of managed domains.
    """
    
    domains: Optional[list[AccountManagedDomain200ApplicationJSONDomains]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domains') }})
    total_records: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_records') }})
    

@dataclasses.dataclass
class AccountManagedDomainRequest:
    path_params: AccountManagedDomainPathParams = dataclasses.field()
    security: AccountManagedDomainSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AccountManagedDomainResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    account_managed_domain_200_application_json_object: Optional[AccountManagedDomain200ApplicationJSON] = dataclasses.field(default=None)
    
