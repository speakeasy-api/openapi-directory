import dataclasses



@dataclasses.dataclass
class AlbumAPIDeleteReviewPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    review_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'reviewId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AlbumAPIDeleteReviewRequest:
    path_params: AlbumAPIDeleteReviewPathParams = dataclasses.field()
    

@dataclasses.dataclass
class AlbumAPIDeleteReviewResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
