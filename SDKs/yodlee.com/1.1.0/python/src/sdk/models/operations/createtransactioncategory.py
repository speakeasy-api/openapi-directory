import dataclasses
from typing import Optional
from ..shared import transactioncategoryrequest as shared_transactioncategoryrequest
from ..shared import yodleeerror as shared_yodleeerror


@dataclasses.dataclass
class CreateTransactionCategoryRequest:
    request: shared_transactioncategoryrequest.TransactionCategoryRequestInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateTransactionCategoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    yodlee_error: Optional[shared_yodleeerror.YodleeError] = dataclasses.field(default=None)
    
