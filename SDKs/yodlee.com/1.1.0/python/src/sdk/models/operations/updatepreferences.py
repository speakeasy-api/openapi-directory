import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import provideraccountpreferencesrequest as shared_provideraccountpreferencesrequest
from ..shared import yodleeerror as shared_yodleeerror


@dataclasses.dataclass
class UpdatePreferencesPathParams:
    provider_account_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'providerAccountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdatePreferencesRequest:
    path_params: UpdatePreferencesPathParams = dataclasses.field()
    request: shared_provideraccountpreferencesrequest.ProviderAccountPreferencesRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdatePreferencesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    yodlee_error: Optional[shared_yodleeerror.YodleeError] = dataclasses.field(default=None)
    
