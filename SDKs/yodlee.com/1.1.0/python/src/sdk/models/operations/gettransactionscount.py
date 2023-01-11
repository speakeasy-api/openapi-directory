import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import transactioncountresponse as shared_transactioncountresponse
from ..shared import yodleeerror as shared_yodleeerror


@dataclasses.dataclass
class GetTransactionsCountQueryParams:
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'accountId', 'style': 'form', 'explode': True }})
    base_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'baseType', 'style': 'form', 'explode': True }})
    category_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'categoryId', 'style': 'form', 'explode': True }})
    category_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'categoryType', 'style': 'form', 'explode': True }})
    container: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'container', 'style': 'form', 'explode': True }})
    detail_category_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'detailCategoryId', 'style': 'form', 'explode': True }})
    from_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fromDate', 'style': 'form', 'explode': True }})
    high_level_category_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'highLevelCategoryId', 'style': 'form', 'explode': True }})
    keyword: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'keyword', 'style': 'form', 'explode': True }})
    to_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'toDate', 'style': 'form', 'explode': True }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTransactionsCountRequest:
    query_params: GetTransactionsCountQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTransactionsCountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    transaction_count_response: Optional[shared_transactioncountresponse.TransactionCountResponse] = dataclasses.field(default=None)
    yodlee_error: Optional[shared_yodleeerror.YodleeError] = dataclasses.field(default=None)
    
