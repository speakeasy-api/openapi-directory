import dataclasses
from typing import Optional
from ..shared import transactioncategoryresponse as shared_transactioncategoryresponse


@dataclasses.dataclass
class GetTransactionCategoriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    transaction_category_response: Optional[shared_transactioncategoryresponse.TransactionCategoryResponse] = dataclasses.field(default=None)
    
