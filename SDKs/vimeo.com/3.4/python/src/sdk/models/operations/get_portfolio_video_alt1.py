import dataclasses
from typing import Optional
from ..shared import video as shared_video


@dataclasses.dataclass
class GetPortfolioVideoAlt1PathParams:
    portfolio_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'portfolio_id', 'style': 'simple', 'explode': False }})
    video_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPortfolioVideoAlt1Request:
    path_params: GetPortfolioVideoAlt1PathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPortfolioVideoAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    video: Optional[shared_video.Video] = dataclasses.field(default=None)
    
