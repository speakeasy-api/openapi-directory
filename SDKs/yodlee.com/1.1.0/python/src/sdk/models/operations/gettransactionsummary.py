import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import derivedtransactionsummaryresponse as shared_derivedtransactionsummaryresponse
from ..shared import yodleeerror as shared_yodleeerror


@dataclasses.dataclass
class GetTransactionSummaryQueryParams:
    group_by: str = dataclasses.field(metadata={'query_param': { 'field_name': 'groupBy', 'style': 'form', 'explode': True }})
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'accountId', 'style': 'form', 'explode': True }})
    category_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'categoryId', 'style': 'form', 'explode': True }})
    category_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'categoryType', 'style': 'form', 'explode': True }})
    from_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fromDate', 'style': 'form', 'explode': True }})
    include: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    include_user_category: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeUserCategory', 'style': 'form', 'explode': True }})
    interval: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'interval', 'style': 'form', 'explode': True }})
    to_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'toDate', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTransactionSummaryRequest:
    query_params: GetTransactionSummaryQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTransactionSummaryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    derived_transaction_summary_response: Optional[shared_derivedtransactionsummaryresponse.DerivedTransactionSummaryResponse] = dataclasses.field(default=None)
    yodlee_error: Optional[shared_yodleeerror.YodleeError] = dataclasses.field(default=None)
    
