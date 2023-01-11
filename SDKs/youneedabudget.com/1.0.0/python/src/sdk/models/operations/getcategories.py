import dataclasses
from typing import Optional
from ..shared import categoriesresponse as shared_categoriesresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetCategoriesPathParams:
    budget_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCategoriesQueryParams:
    last_knowledge_of_server: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'last_knowledge_of_server', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCategoriesRequest:
    path_params: GetCategoriesPathParams = dataclasses.field()
    query_params: GetCategoriesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCategoriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    categories_response: Optional[shared_categoriesresponse.CategoriesResponse] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
