import dataclasses
from typing import Optional
from ..shared import albumforuserforapicontract as shared_albumforuserforapicontract


@dataclasses.dataclass
class GetAPIUsersCurrentAlbumCollectionStatusesAlbumIDPathParams:
    album_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'albumId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAPIUsersCurrentAlbumCollectionStatusesAlbumIDRequest:
    path_params: GetAPIUsersCurrentAlbumCollectionStatusesAlbumIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAPIUsersCurrentAlbumCollectionStatusesAlbumIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    album_for_user_for_api_contract: Optional[shared_albumforuserforapicontract.AlbumForUserForAPIContract] = dataclasses.field(default=None)
    body: Optional[bytes] = dataclasses.field(default=None)
    
