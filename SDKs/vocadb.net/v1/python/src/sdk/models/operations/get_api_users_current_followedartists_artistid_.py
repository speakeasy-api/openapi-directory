import dataclasses
from typing import Optional
from ..shared import artistforuserforapicontract as shared_artistforuserforapicontract


@dataclasses.dataclass
class GetAPIUsersCurrentFollowedArtistsArtistIDPathParams:
    artist_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'artistId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAPIUsersCurrentFollowedArtistsArtistIDRequest:
    path_params: GetAPIUsersCurrentFollowedArtistsArtistIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAPIUsersCurrentFollowedArtistsArtistIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    artist_for_user_for_api_contract: Optional[shared_artistforuserforapicontract.ArtistForUserForAPIContract] = dataclasses.field(default=None)
    body: Optional[bytes] = dataclasses.field(default=None)
    
