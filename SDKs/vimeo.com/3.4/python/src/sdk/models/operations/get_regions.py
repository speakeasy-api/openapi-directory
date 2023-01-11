import dataclasses
from typing import Optional
from ..shared import on_demand_region as shared_on_demand_region


@dataclasses.dataclass
class GetRegionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    on_demand_regions: Optional[list[shared_on_demand_region.OnDemandRegion]] = dataclasses.field(default=None)
    
