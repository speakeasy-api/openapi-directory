import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeletePictureAlt1PathParams:
    portraitset_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'portraitset_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeletePictureAlt1Security:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeletePictureAlt1Request:
    path_params: DeletePictureAlt1PathParams = dataclasses.field()
    security: DeletePictureAlt1Security = dataclasses.field()
    

@dataclasses.dataclass
class DeletePictureAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
