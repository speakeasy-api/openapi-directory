import dataclasses



@dataclasses.dataclass
class ArtistAPIDeleteCommentPathParams:
    comment_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'commentId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ArtistAPIDeleteCommentRequest:
    path_params: ArtistAPIDeleteCommentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ArtistAPIDeleteCommentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
