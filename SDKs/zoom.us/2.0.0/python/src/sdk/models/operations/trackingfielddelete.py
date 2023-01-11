import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class TrackingfieldDeletePathParams:
    field_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'fieldId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TrackingfieldDeleteSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class TrackingfieldDeleteRequest:
    path_params: TrackingfieldDeletePathParams = dataclasses.field()
    security: TrackingfieldDeleteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class TrackingfieldDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
