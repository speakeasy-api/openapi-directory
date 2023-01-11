import dataclasses
from typing import Optional


@dataclasses.dataclass
class VenueAPIDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class VenueAPIDeleteQueryParams:
    hard_delete: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'hardDelete', 'style': 'form', 'explode': True }})
    notes: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'notes', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class VenueAPIDeleteRequest:
    path_params: VenueAPIDeletePathParams = dataclasses.field()
    query_params: VenueAPIDeleteQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class VenueAPIDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
