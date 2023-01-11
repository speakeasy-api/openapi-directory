import dataclasses
from typing import Optional
from ..shared import albumforuserforapicontract as shared_albumforuserforapicontract


@dataclasses.dataclass
class UserAPIGetAlbumForUserPathParams:
    album_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'albumId', 'style': 'simple', 'explode': False }})
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UserAPIGetAlbumForUserRequest:
    path_params: UserAPIGetAlbumForUserPathParams = dataclasses.field()
    

@dataclasses.dataclass
class UserAPIGetAlbumForUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    album_for_user_for_api_contract: Optional[shared_albumforuserforapicontract.AlbumForUserForAPIContract] = dataclasses.field(default=None)
    body: Optional[bytes] = dataclasses.field(default=None)
    
