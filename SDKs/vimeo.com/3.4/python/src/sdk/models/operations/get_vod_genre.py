import dataclasses
from typing import Optional
from ..shared import legacy_error as shared_legacy_error
from ..shared import on_demand_genre as shared_on_demand_genre


@dataclasses.dataclass
class GetVodGenrePathParams:
    genre_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'genre_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVodGenreRequest:
    path_params: GetVodGenrePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetVodGenreResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    on_demand_genre: Optional[shared_on_demand_genre.OnDemandGenre] = dataclasses.field(default=None)
    
