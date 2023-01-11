import dataclasses
from typing import Optional
from ..shared import on_demand_genre as shared_on_demand_genre


@dataclasses.dataclass
class GetVodGenresResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    on_demand_genres: Optional[list[shared_on_demand_genre.OnDemandGenre]] = dataclasses.field(default=None)
    
