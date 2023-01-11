import dataclasses
from typing import Optional
from ..shared import cashinresponse as shared_cashinresponse
from ..shared import errors as shared_errors


@dataclasses.dataclass
class CashinPathParams:
    bet_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'betId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CashinQueryParams:
    cash_in_value: float = dataclasses.field(metadata={'query_param': { 'field_name': 'cashInValue', 'style': 'form', 'explode': True }})
    cashin_bet_delay_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'cashinBetDelayId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CashinHeaders:
    api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'apiKey', 'style': 'simple', 'explode': False }})
    api_secret: str = dataclasses.field(metadata={'header': { 'field_name': 'apiSecret', 'style': 'simple', 'explode': False }})
    api_ticket: str = dataclasses.field(metadata={'header': { 'field_name': 'apiTicket', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CashinRequest:
    headers: CashinHeaders = dataclasses.field()
    path_params: CashinPathParams = dataclasses.field()
    query_params: CashinQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class CashinResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    cash_in_response: Optional[shared_cashinresponse.CashInResponse] = dataclasses.field(default=None)
    errors: Optional[shared_errors.Errors] = dataclasses.field(default=None)
    
