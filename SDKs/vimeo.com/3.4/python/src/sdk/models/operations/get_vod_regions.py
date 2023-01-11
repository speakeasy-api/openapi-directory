import dataclasses
from typing import Optional
from ..shared import legacy_error as shared_legacy_error
from ..shared import on_demand_region as shared_on_demand_region


@dataclasses.dataclass
class GetVodRegionsPathParams:
    ondemand_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVodRegionsRequest:
    path_params: GetVodRegionsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetVodRegionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    on_demand_regions: Optional[list[shared_on_demand_region.OnDemandRegion]] = dataclasses.field(default=None)
    
