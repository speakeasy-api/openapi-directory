import dataclasses
from typing import Optional
from ..shared import providerscountresponse as shared_providerscountresponse
from ..shared import yodleeerror as shared_yodleeerror


@dataclasses.dataclass
class GetProvidersCountQueryParams:
    capability: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'capability', 'style': 'form', 'explode': True }})
    dataset_dollar_filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'dataset$filter', 'style': 'form', 'explode': True }})
    full_account_number_fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fullAccountNumberFields', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    priority: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'priority', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetProvidersCountRequest:
    query_params: GetProvidersCountQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetProvidersCountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    providers_count_response: Optional[shared_providerscountresponse.ProvidersCountResponse] = dataclasses.field(default=None)
    yodlee_error: Optional[shared_yodleeerror.YodleeError] = dataclasses.field(default=None)
    
