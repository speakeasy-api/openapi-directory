import dataclasses
from typing import Optional


@dataclasses.dataclass
class DeleteWebinarRegistrantPathParams:
    registrant_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'registrantId', 'style': 'simple', 'explode': False }})
    webinar_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'webinarId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteWebinarRegistrantQueryParams:
    occurrence_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'occurrence_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteWebinarRegistrantRequest:
    path_params: DeleteWebinarRegistrantPathParams = dataclasses.field()
    query_params: DeleteWebinarRegistrantQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteWebinarRegistrantResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
