import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import legacy_error as shared_legacy_error
from ..shared import on_demand_region as shared_on_demand_region


@dataclasses.dataclass
class DeleteVodRegionsPathParams:
    ondemand_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteVodRegionsRequestBody:
    countries: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countries') }})
    

@dataclasses.dataclass
class DeleteVodRegionsSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteVodRegionsRequest:
    path_params: DeleteVodRegionsPathParams = dataclasses.field()
    security: DeleteVodRegionsSecurity = dataclasses.field()
    request: Optional[DeleteVodRegionsRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/vnd.vimeo.ondemand.region+json' }})
    

@dataclasses.dataclass
class DeleteVodRegionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    on_demand_regions: Optional[list[shared_on_demand_region.OnDemandRegion]] = dataclasses.field(default=None)
    
