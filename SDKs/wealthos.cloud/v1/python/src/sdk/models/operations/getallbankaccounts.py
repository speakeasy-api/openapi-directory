import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetAllBankAccountsQueryParams:
    investor_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'investor_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAllBankAccountsHeaders:
    x_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAllBankAccountsSecurity:
    api_secret_key: shared_security.SchemeAPISecretKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class GetAllBankAccounts200ApplicationJSON:
    r"""GetAllBankAccounts200ApplicationJSON
    Array of bank accounts
    """
    
    bank_accounts: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bankAccounts') }})
    

@dataclasses.dataclass
class GetAllBankAccountsRequest:
    headers: GetAllBankAccountsHeaders = dataclasses.field()
    query_params: GetAllBankAccountsQueryParams = dataclasses.field()
    security: GetAllBankAccountsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAllBankAccountsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_all_bank_accounts_200_application_json_object: Optional[GetAllBankAccounts200ApplicationJSON] = dataclasses.field(default=None)
    get_all_bank_accounts_400_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_all_bank_accounts_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_all_bank_accounts_403_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_all_bank_accounts_404_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_all_bank_accounts_409_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_all_bank_accounts_429_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_all_bank_accounts_500_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
