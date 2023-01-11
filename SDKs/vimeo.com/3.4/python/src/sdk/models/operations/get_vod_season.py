import dataclasses
from typing import Optional
from ..shared import legacy_error as shared_legacy_error
from ..shared import on_demand_season as shared_on_demand_season


@dataclasses.dataclass
class GetVodSeasonPathParams:
    ondemand_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    season_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'season_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVodSeasonRequest:
    path_params: GetVodSeasonPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetVodSeasonResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    on_demand_season: Optional[shared_on_demand_season.OnDemandSeason] = dataclasses.field(default=None)
    
