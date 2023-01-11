import dataclasses
from typing import Optional
from ..shared import domainlistresult as shared_domainlistresult


@dataclasses.dataclass
class DomainsListPathParams:
    tenant_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DomainsListQueryParams:
    api_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    dollar_filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$filter', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DomainsListRequest:
    path_params: DomainsListPathParams = dataclasses.field()
    query_params: DomainsListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DomainsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    domain_list_result: Optional[shared_domainlistresult.DomainListResult] = dataclasses.field(default=None)
    
