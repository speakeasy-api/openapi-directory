import dataclasses
from typing import Optional
from ..shared import holdingresponse as shared_holdingresponse
from ..shared import yodleeerror as shared_yodleeerror


@dataclasses.dataclass
class GetHoldingsQueryParams:
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'accountId', 'style': 'form', 'explode': True }})
    asset_classification_classification_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'assetClassification.classificationType', 'style': 'form', 'explode': True }})
    classification_value: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'classificationValue', 'style': 'form', 'explode': True }})
    include: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    provider_account_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'providerAccountId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetHoldingsRequest:
    query_params: GetHoldingsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetHoldingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    holding_response: Optional[shared_holdingresponse.HoldingResponse] = dataclasses.field(default=None)
    yodlee_error: Optional[shared_yodleeerror.YodleeError] = dataclasses.field(default=None)
    
