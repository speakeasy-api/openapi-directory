import dataclasses
from typing import Optional
from ..shared import itinerary as shared_itinerary
from ..shared import calculateresult as shared_calculateresult


@dataclasses.dataclass
class PostAPI10CalculateRequest:
    request: Optional[list[shared_itinerary.Itinerary]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostAPI10CalculateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    calculate_results: Optional[list[shared_calculateresult.CalculateResult]] = dataclasses.field(default=None)
    
