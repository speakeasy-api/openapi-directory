import dataclasses
from typing import Optional
from ..shared import legacy_error as shared_legacy_error
from ..shared import on_demand_page as shared_on_demand_page


@dataclasses.dataclass
class GetVodPathParams:
    ondemand_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVodRequest:
    path_params: GetVodPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetVodResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    on_demand_page: Optional[shared_on_demand_page.OnDemandPage] = dataclasses.field(default=None)
    
