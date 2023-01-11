import dataclasses
from typing import Optional
from ..shared import artistforuserforapicontract as shared_artistforuserforapicontract


@dataclasses.dataclass
class UserAPIGetArtistForUserPathParams:
    artist_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'artistId', 'style': 'simple', 'explode': False }})
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UserAPIGetArtistForUserRequest:
    path_params: UserAPIGetArtistForUserPathParams = dataclasses.field()
    

@dataclasses.dataclass
class UserAPIGetArtistForUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    artist_for_user_for_api_contract: Optional[shared_artistforuserforapicontract.ArtistForUserForAPIContract] = dataclasses.field(default=None)
    body: Optional[bytes] = dataclasses.field(default=None)
    
