import dataclasses
from typing import Optional
from ..shared import holdingsecuritiesresponse as shared_holdingsecuritiesresponse
from ..shared import yodleeerror as shared_yodleeerror


@dataclasses.dataclass
class GetSecuritiesQueryParams:
    holding_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'holdingId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSecuritiesRequest:
    query_params: GetSecuritiesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSecuritiesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    holding_securities_response: Optional[shared_holdingsecuritiesresponse.HoldingSecuritiesResponse] = dataclasses.field(default=None)
    yodlee_error: Optional[shared_yodleeerror.YodleeError] = dataclasses.field(default=None)
    
