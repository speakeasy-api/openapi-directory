import dataclasses
from typing import Optional
from ..shared import categoryresponse as shared_categoryresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetCategoryByIDPathParams:
    budget_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    category_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'category_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCategoryByIDRequest:
    path_params: GetCategoryByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCategoryByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    category_response: Optional[shared_categoryresponse.CategoryResponse] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
