import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DomainsGetPathParams:
    domain_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    tenant_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DomainsGetQueryParams:
    api_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DomainsGetRequest:
    path_params: DomainsGetPathParams = dataclasses.field()
    query_params: DomainsGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DomainsGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    domain: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None)
    
