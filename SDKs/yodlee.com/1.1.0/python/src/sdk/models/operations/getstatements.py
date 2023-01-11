import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import statementresponse as shared_statementresponse
from ..shared import yodleeerror as shared_yodleeerror


@dataclasses.dataclass
class GetStatementsQueryParams:
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'accountId', 'style': 'form', 'explode': True }})
    container: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'container', 'style': 'form', 'explode': True }})
    from_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fromDate', 'style': 'form', 'explode': True }})
    is_latest: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'isLatest', 'style': 'form', 'explode': True }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetStatementsRequest:
    query_params: GetStatementsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetStatementsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    statement_response: Optional[shared_statementresponse.StatementResponse] = dataclasses.field(default=None)
    yodlee_error: Optional[shared_yodleeerror.YodleeError] = dataclasses.field(default=None)
    
