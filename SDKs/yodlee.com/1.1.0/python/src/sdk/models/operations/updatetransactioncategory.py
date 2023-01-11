import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import updatecategoryrequest as shared_updatecategoryrequest
from ..shared import yodleeerror as shared_yodleeerror


@dataclasses.dataclass
class UpdateTransactionCategoryRequest:
    request: shared_updatecategoryrequest.UpdateCategoryRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateTransactionCategoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    yodlee_error: Optional[shared_yodleeerror.YodleeError] = dataclasses.field(default=None)
    
