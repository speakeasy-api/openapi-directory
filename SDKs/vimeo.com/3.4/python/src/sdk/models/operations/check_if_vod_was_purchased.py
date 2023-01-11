import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import legacy_error as shared_legacy_error
from ..shared import on_demand_page as shared_on_demand_page


@dataclasses.dataclass
class CheckIfVodWasPurchasedPathParams:
    user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CheckIfVodWasPurchasedSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CheckIfVodWasPurchasedRequest:
    path_params: CheckIfVodWasPurchasedPathParams = dataclasses.field()
    security: CheckIfVodWasPurchasedSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CheckIfVodWasPurchasedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    on_demand_page: Optional[shared_on_demand_page.OnDemandPage] = dataclasses.field(default=None)
    
