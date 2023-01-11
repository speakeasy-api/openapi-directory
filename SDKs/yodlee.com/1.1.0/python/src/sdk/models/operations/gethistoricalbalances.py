import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import accounthistoricalbalancesresponse as shared_accounthistoricalbalancesresponse
from ..shared import yodleeerror as shared_yodleeerror


@dataclasses.dataclass
class GetHistoricalBalancesQueryParams:
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'accountId', 'style': 'form', 'explode': True }})
    from_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fromDate', 'style': 'form', 'explode': True }})
    include_cf: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeCF', 'style': 'form', 'explode': True }})
    interval: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'interval', 'style': 'form', 'explode': True }})
    skip: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    to_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'toDate', 'style': 'form', 'explode': True }})
    top: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'top', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetHistoricalBalancesRequest:
    query_params: GetHistoricalBalancesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetHistoricalBalancesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    account_historical_balances_response: Optional[shared_accounthistoricalbalancesresponse.AccountHistoricalBalancesResponse] = dataclasses.field(default=None)
    yodlee_error: Optional[shared_yodleeerror.YodleeError] = dataclasses.field(default=None)
    
