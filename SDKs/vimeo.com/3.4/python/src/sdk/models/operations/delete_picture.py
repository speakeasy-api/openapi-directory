import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeletePicturePathParams:
    portraitset_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'portraitset_id', 'style': 'simple', 'explode': False }})
    user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeletePictureSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeletePictureRequest:
    path_params: DeletePicturePathParams = dataclasses.field()
    security: DeletePictureSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeletePictureResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
