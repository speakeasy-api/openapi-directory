import dataclasses
from typing import Optional
from ..shared import complexbetrequestbody as shared_complexbetrequestbody
from ..shared import betdelayed as shared_betdelayed
from ..shared import betplaced as shared_betplaced
from ..shared import errors as shared_errors


@dataclasses.dataclass
class PlaceComplexBetQueryParams:
    exclude: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'exclude', 'style': 'form', 'explode': False }})
    fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    include: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class PlaceComplexBetHeaders:
    api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'apiKey', 'style': 'simple', 'explode': False }})
    api_secret: str = dataclasses.field(metadata={'header': { 'field_name': 'apiSecret', 'style': 'simple', 'explode': False }})
    api_ticket: str = dataclasses.field(metadata={'header': { 'field_name': 'apiTicket', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PlaceComplexBetRequest:
    headers: PlaceComplexBetHeaders = dataclasses.field()
    query_params: PlaceComplexBetQueryParams = dataclasses.field()
    request: shared_complexbetrequestbody.ComplexBetRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PlaceComplexBetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bet_delayed_response: Optional[list[shared_betdelayed.BetDelayed]] = dataclasses.field(default=None)
    bet_placed_response: Optional[list[shared_betplaced.BetPlaced]] = dataclasses.field(default=None)
    errors: Optional[shared_errors.Errors] = dataclasses.field(default=None)
    
