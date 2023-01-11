import dataclasses
from typing import Optional
from ..shared import domain as shared_domain
from ..shared import legacy_error as shared_legacy_error


@dataclasses.dataclass
class GetVideoPrivacyDomainsPathParams:
    video_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVideoPrivacyDomainsQueryParams:
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetVideoPrivacyDomainsRequest:
    path_params: GetVideoPrivacyDomainsPathParams = dataclasses.field()
    query_params: GetVideoPrivacyDomainsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetVideoPrivacyDomainsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    domains: Optional[list[shared_domain.Domain]] = dataclasses.field(default=None)
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    
