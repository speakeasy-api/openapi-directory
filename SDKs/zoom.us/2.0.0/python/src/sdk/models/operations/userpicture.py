import dataclasses



@dataclasses.dataclass
class UserPicturePathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UserPictureRequestBodyPicFile:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    pic_file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'pic_file' }})
    

@dataclasses.dataclass
class UserPictureRequestBody:
    pic_file: UserPictureRequestBodyPicFile = dataclasses.field(metadata={'multipart_form': { 'file': True }})
    

@dataclasses.dataclass
class UserPictureRequest:
    path_params: UserPicturePathParams = dataclasses.field()
    request: UserPictureRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UserPictureResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    
