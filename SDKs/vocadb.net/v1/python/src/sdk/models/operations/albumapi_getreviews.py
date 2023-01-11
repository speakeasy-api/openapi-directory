import dataclasses
from typing import Optional
from ..shared import albumreviewcontract as shared_albumreviewcontract


@dataclasses.dataclass
class AlbumAPIGetReviewsPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AlbumAPIGetReviewsQueryParams:
    language_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'languageCode', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AlbumAPIGetReviewsRequest:
    path_params: AlbumAPIGetReviewsPathParams = dataclasses.field()
    query_params: AlbumAPIGetReviewsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class AlbumAPIGetReviewsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    album_review_contracts: Optional[list[shared_albumreviewcontract.AlbumReviewContract]] = dataclasses.field(default=None)
    body: Optional[bytes] = dataclasses.field(default=None)
    
