import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import bethistoryresponse as shared_bethistoryresponse
from ..shared import errors as shared_errors


@dataclasses.dataclass
class GetBetHistoryQueryParams:
    date_from: str = dataclasses.field(metadata={'query_param': { 'field_name': 'dateFrom', 'style': 'form', 'explode': True }})
    date_to: str = dataclasses.field(metadata={'query_param': { 'field_name': 'dateTo', 'style': 'form', 'explode': True }})
    exclude: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'exclude', 'style': 'form', 'explode': False }})
    fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    include: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': False }})
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    settled: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'settled', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetBetHistoryHeaders:
    api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'apiKey', 'style': 'simple', 'explode': False }})
    api_secret: str = dataclasses.field(metadata={'header': { 'field_name': 'apiSecret', 'style': 'simple', 'explode': False }})
    api_ticket: str = dataclasses.field(metadata={'header': { 'field_name': 'apiTicket', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetBetHistoryRequest:
    headers: GetBetHistoryHeaders = dataclasses.field()
    query_params: GetBetHistoryQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetBetHistoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bet_history_response: Optional[shared_bethistoryresponse.BetHistoryResponse] = dataclasses.field(default=None)
    errors: Optional[shared_errors.Errors] = dataclasses.field(default=None)
    
