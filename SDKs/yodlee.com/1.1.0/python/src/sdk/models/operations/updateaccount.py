import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import updateaccountrequest as shared_updateaccountrequest
from ..shared import yodleeerror as shared_yodleeerror


@dataclasses.dataclass
class UpdateAccountPathParams:
    account_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateAccountRequest:
    path_params: UpdateAccountPathParams = dataclasses.field()
    request: shared_updateaccountrequest.UpdateAccountRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateAccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    yodlee_error: Optional[shared_yodleeerror.YodleeError] = dataclasses.field(default=None)
    
