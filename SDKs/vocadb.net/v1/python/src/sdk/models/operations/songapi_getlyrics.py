import dataclasses
from typing import Optional
from ..shared import lyricsforsongcontract as shared_lyricsforsongcontract


@dataclasses.dataclass
class SongAPIGetLyricsPathParams:
    lyrics_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'lyricsId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SongAPIGetLyricsRequest:
    path_params: SongAPIGetLyricsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class SongAPIGetLyricsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    lyrics_for_song_contract: Optional[shared_lyricsforsongcontract.LyricsForSongContract] = dataclasses.field(default=None)
    
