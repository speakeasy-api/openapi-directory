import dataclasses
from typing import Optional
from ..shared import yodleeerror as shared_yodleeerror


@dataclasses.dataclass
class DeleteTransactionCategoryPathParams:
    category_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'categoryId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteTransactionCategoryRequest:
    path_params: DeleteTransactionCategoryPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteTransactionCategoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    yodlee_error: Optional[shared_yodleeerror.YodleeError] = dataclasses.field(default=None)
    
