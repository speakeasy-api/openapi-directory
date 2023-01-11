import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import legacy_error as shared_legacy_error


@dataclasses.dataclass
class AddVideoPrivacyDomainPathParams:
    domain: str = dataclasses.field(metadata={'path_param': { 'field_name': 'domain', 'style': 'simple', 'explode': False }})
    video_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AddVideoPrivacyDomainSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AddVideoPrivacyDomainRequest:
    path_params: AddVideoPrivacyDomainPathParams = dataclasses.field()
    security: AddVideoPrivacyDomainSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AddVideoPrivacyDomainResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    
