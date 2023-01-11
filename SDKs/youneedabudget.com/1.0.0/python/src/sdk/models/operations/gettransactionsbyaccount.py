import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import errorresponse as shared_errorresponse
from ..shared import transactionsresponse as shared_transactionsresponse


@dataclasses.dataclass
class GetTransactionsByAccountPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'account_id', 'style': 'simple', 'explode': False }})
    budget_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    
class GetTransactionsByAccountTypeEnum(str, Enum):
    UNCATEGORIZED = "uncategorized"
    UNAPPROVED = "unapproved"


@dataclasses.dataclass
class GetTransactionsByAccountQueryParams:
    last_knowledge_of_server: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'last_knowledge_of_server', 'style': 'form', 'explode': True }})
    since_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since_date', 'style': 'form', 'explode': True }})
    type: Optional[GetTransactionsByAccountTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTransactionsByAccountRequest:
    path_params: GetTransactionsByAccountPathParams = dataclasses.field()
    query_params: GetTransactionsByAccountQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTransactionsByAccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    transactions_response: Optional[shared_transactionsresponse.TransactionsResponse] = dataclasses.field(default=None)
    
