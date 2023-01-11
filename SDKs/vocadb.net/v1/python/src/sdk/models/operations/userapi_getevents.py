import dataclasses
from typing import Optional
from enum import Enum
from ..shared import releaseeventforapicontract as shared_releaseeventforapicontract


@dataclasses.dataclass
class UserAPIGetEventsPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class UserAPIGetEventsRelationshipTypeEnum(str, Enum):
    INTERESTED = "Interested"
    ATTENDING = "Attending"


@dataclasses.dataclass
class UserAPIGetEventsQueryParams:
    relationship_type: UserAPIGetEventsRelationshipTypeEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'relationshipType', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UserAPIGetEventsRequest:
    path_params: UserAPIGetEventsPathParams = dataclasses.field()
    query_params: UserAPIGetEventsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class UserAPIGetEventsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    release_event_for_api_contracts: Optional[list[shared_releaseeventforapicontract.ReleaseEventForAPIContract]] = dataclasses.field(default=None)
    
