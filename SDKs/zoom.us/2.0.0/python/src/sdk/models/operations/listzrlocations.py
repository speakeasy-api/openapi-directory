import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class ListZrLocationsQueryParams:
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'next_page_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    parent_location_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'parent_location_id', 'style': 'form', 'explode': True }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListZrLocationsSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
class ListZrLocations200ApplicationJSONLocationsTypeEnum(str, Enum):
    COUNTRY = "country"
    STATES = "states"
    CITY = "city"
    CAMPUS = "campus"
    BUILDING = "building"
    FLOOR = "floor"


@dataclass_json
@dataclasses.dataclass
class ListZrLocations200ApplicationJSONLocations:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent_location_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent_location_id') }})
    type: Optional[ListZrLocations200ApplicationJSONLocationsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class ListZrLocations200ApplicationJSON:
    locations: Optional[list[ListZrLocations200ApplicationJSONLocations]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_token') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    

@dataclasses.dataclass
class ListZrLocationsRequest:
    query_params: ListZrLocationsQueryParams = dataclasses.field()
    security: ListZrLocationsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListZrLocationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    list_zr_locations_200_application_json_object: Optional[ListZrLocations200ApplicationJSON] = dataclasses.field(default=None)
    
