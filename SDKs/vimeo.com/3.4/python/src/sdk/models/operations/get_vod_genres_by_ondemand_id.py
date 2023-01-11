import dataclasses
from typing import Optional
from ..shared import legacy_error as shared_legacy_error
from ..shared import on_demand_genre as shared_on_demand_genre


@dataclasses.dataclass
class GetVodGenresByOndemandIDPathParams:
    ondemand_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVodGenresByOndemandIDRequest:
    path_params: GetVodGenresByOndemandIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetVodGenresByOndemandIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    on_demand_genres: Optional[list[shared_on_demand_genre.OnDemandGenre]] = dataclasses.field(default=None)
    
