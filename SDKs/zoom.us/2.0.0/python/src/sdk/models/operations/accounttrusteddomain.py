import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class AccountTrustedDomainPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AccountTrustedDomainRequest:
    path_params: AccountTrustedDomainPathParams = dataclasses.field()
    

@dataclasses.dataclass
class AccountTrustedDomainResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    account_trusted_domain_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
