import dataclasses
from typing import Optional
from ..shared import providerresponse as shared_providerresponse
from ..shared import yodleeerror as shared_yodleeerror


@dataclasses.dataclass
class GetAllProvidersQueryParams:
    capability: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'capability', 'style': 'form', 'explode': True }})
    dataset_dollar_filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'dataset$filter', 'style': 'form', 'explode': True }})
    full_account_number_fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fullAccountNumberFields', 'style': 'form', 'explode': True }})
    institution_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'institutionId', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    priority: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'priority', 'style': 'form', 'explode': True }})
    provider_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'providerId', 'style': 'form', 'explode': True }})
    skip: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    top: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'top', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAllProvidersRequest:
    query_params: GetAllProvidersQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAllProvidersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    provider_response: Optional[shared_providerresponse.ProviderResponse] = dataclasses.field(default=None)
    yodlee_error: Optional[shared_yodleeerror.YodleeError] = dataclasses.field(default=None)
    
