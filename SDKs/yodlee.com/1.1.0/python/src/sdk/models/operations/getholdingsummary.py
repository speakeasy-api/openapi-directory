import dataclasses
from typing import Optional
from ..shared import derivedholdingsummaryresponse as shared_derivedholdingsummaryresponse
from ..shared import yodleeerror as shared_yodleeerror


@dataclasses.dataclass
class GetHoldingSummaryQueryParams:
    account_ids: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'accountIds', 'style': 'form', 'explode': True }})
    classification_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'classificationType', 'style': 'form', 'explode': True }})
    include: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetHoldingSummaryRequest:
    query_params: GetHoldingSummaryQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetHoldingSummaryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    derived_holding_summary_response: Optional[shared_derivedholdingsummaryresponse.DerivedHoldingSummaryResponse] = dataclasses.field(default=None)
    yodlee_error: Optional[shared_yodleeerror.YodleeError] = dataclasses.field(default=None)
    
