import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import provideraccountrequest as shared_provideraccountrequest
from ..shared import updatedprovideraccountresponse as shared_updatedprovideraccountresponse
from ..shared import yodleeerror as shared_yodleeerror


@dataclasses.dataclass
class EditCredentialsOrRefreshProviderAccountQueryParams:
    provider_account_ids: str = dataclasses.field(metadata={'query_param': { 'field_name': 'providerAccountIds', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EditCredentialsOrRefreshProviderAccountRequest:
    query_params: EditCredentialsOrRefreshProviderAccountQueryParams = dataclasses.field()
    request: Optional[shared_provideraccountrequest.ProviderAccountRequestInput] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EditCredentialsOrRefreshProviderAccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    updated_provider_account_response: Optional[shared_updatedprovideraccountresponse.UpdatedProviderAccountResponse] = dataclasses.field(default=None)
    yodlee_error: Optional[shared_yodleeerror.YodleeError] = dataclasses.field(default=None)
    
