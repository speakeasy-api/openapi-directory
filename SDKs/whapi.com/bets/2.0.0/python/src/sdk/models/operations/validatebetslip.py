import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import betsliprequest as shared_betsliprequest
from ..shared import betslipresponse as shared_betslipresponse


@dataclasses.dataclass
class ValidateBetslipQueryParams:
    expanded: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'expanded', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ValidateBetslipHeaders:
    api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'apiKey', 'style': 'simple', 'explode': False }})
    api_secret: str = dataclasses.field(metadata={'header': { 'field_name': 'apiSecret', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ValidateBetslipRequest:
    headers: ValidateBetslipHeaders = dataclasses.field()
    query_params: ValidateBetslipQueryParams = dataclasses.field()
    request: shared_betsliprequest.BetSlipRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ValidateBetslipResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bet_slip_response: Optional[shared_betslipresponse.BetSlipResponse] = dataclasses.field(default=None)
    
