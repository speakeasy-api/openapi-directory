import dataclasses
from typing import Optional
from ..shared import yodleeerror as shared_yodleeerror


@dataclasses.dataclass
class DeleteProviderAccountPathParams:
    provider_account_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'providerAccountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteProviderAccountRequest:
    path_params: DeleteProviderAccountPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteProviderAccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    yodlee_error: Optional[shared_yodleeerror.YodleeError] = dataclasses.field(default=None)
    
