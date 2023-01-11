import dataclasses
from typing import Optional
from ..shared import content_rating as shared_content_rating


@dataclasses.dataclass
class GetContentRatingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    content_ratings: Optional[list[shared_content_rating.ContentRating]] = dataclasses.field(default=None)
    
