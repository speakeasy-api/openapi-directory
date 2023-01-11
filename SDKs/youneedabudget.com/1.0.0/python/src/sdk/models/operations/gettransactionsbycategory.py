import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import errorresponse as shared_errorresponse
from ..shared import hybridtransactionsresponse as shared_hybridtransactionsresponse


@dataclasses.dataclass
class GetTransactionsByCategoryPathParams:
    budget_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    category_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'category_id', 'style': 'simple', 'explode': False }})
    
class GetTransactionsByCategoryTypeEnum(str, Enum):
    UNCATEGORIZED = "uncategorized"
    UNAPPROVED = "unapproved"


@dataclasses.dataclass
class GetTransactionsByCategoryQueryParams:
    last_knowledge_of_server: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'last_knowledge_of_server', 'style': 'form', 'explode': True }})
    since_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since_date', 'style': 'form', 'explode': True }})
    type: Optional[GetTransactionsByCategoryTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTransactionsByCategoryRequest:
    path_params: GetTransactionsByCategoryPathParams = dataclasses.field()
    query_params: GetTransactionsByCategoryQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTransactionsByCategoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    hybrid_transactions_response: Optional[shared_hybridtransactionsresponse.HybridTransactionsResponse] = dataclasses.field(default=None)
    
