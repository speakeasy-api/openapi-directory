import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import errorresponse as shared_errorresponse
from ..shared import hybridtransactionsresponse as shared_hybridtransactionsresponse


@dataclasses.dataclass
class GetTransactionsByPayeePathParams:
    budget_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    payee_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'payee_id', 'style': 'simple', 'explode': False }})
    
class GetTransactionsByPayeeTypeEnum(str, Enum):
    UNCATEGORIZED = "uncategorized"
    UNAPPROVED = "unapproved"


@dataclasses.dataclass
class GetTransactionsByPayeeQueryParams:
    last_knowledge_of_server: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'last_knowledge_of_server', 'style': 'form', 'explode': True }})
    since_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since_date', 'style': 'form', 'explode': True }})
    type: Optional[GetTransactionsByPayeeTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTransactionsByPayeeRequest:
    path_params: GetTransactionsByPayeePathParams = dataclasses.field()
    query_params: GetTransactionsByPayeeQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTransactionsByPayeeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    hybrid_transactions_response: Optional[shared_hybridtransactionsresponse.HybridTransactionsResponse] = dataclasses.field(default=None)
    
