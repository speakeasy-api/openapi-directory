import dataclasses
from typing import Optional
from ..shared import songratingcontract as shared_songratingcontract


@dataclasses.dataclass
class SongAPIPostRatingPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SongAPIPostRatingRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'text/xml' }})
    song_rating_contract: Optional[shared_songratingcontract.SongRatingContract] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    song_rating_contract1: Optional[shared_songratingcontract.SongRatingContract] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    song_rating_contract2: Optional[shared_songratingcontract.SongRatingContract] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class SongAPIPostRatingRequest:
    path_params: SongAPIPostRatingPathParams = dataclasses.field()
    request: SongAPIPostRatingRequests = dataclasses.field()
    

@dataclasses.dataclass
class SongAPIPostRatingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
