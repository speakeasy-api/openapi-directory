import dataclasses



@dataclasses.dataclass
class AlbumAPIDeleteCommentPathParams:
    comment_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'commentId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AlbumAPIDeleteCommentRequest:
    path_params: AlbumAPIDeleteCommentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class AlbumAPIDeleteCommentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
