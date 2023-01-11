import dataclasses
from typing import Optional
from ..shared import freebetdetail as shared_freebetdetail


@dataclasses.dataclass
class GetFreeBetsQueryParams:
    exclude: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'exclude', 'style': 'form', 'explode': False }})
    fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    include: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class GetFreeBetsHeaders:
    api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'apiKey', 'style': 'simple', 'explode': False }})
    api_secret: str = dataclasses.field(metadata={'header': { 'field_name': 'apiSecret', 'style': 'simple', 'explode': False }})
    api_ticket: str = dataclasses.field(metadata={'header': { 'field_name': 'apiTicket', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetFreeBetsRequest:
    headers: GetFreeBetsHeaders = dataclasses.field()
    query_params: GetFreeBetsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetFreeBetsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    free_bet: Optional[list[shared_freebetdetail.FreeBetDetail]] = dataclasses.field(default=None)
    
