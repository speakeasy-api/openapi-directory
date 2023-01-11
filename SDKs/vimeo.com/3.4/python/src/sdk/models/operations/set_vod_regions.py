import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import legacy_error as shared_legacy_error
from ..shared import on_demand_region as shared_on_demand_region


@dataclasses.dataclass
class SetVodRegionsPathParams:
    ondemand_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class SetVodRegionsRequestBody:
    countries: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('countries') }})
    

@dataclasses.dataclass
class SetVodRegionsSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class SetVodRegionsRequest:
    path_params: SetVodRegionsPathParams = dataclasses.field()
    request: SetVodRegionsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/vnd.vimeo.ondemand.region+json' }})
    security: SetVodRegionsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class SetVodRegionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    on_demand_region: Optional[shared_on_demand_region.OnDemandRegion] = dataclasses.field(default=None)
    
