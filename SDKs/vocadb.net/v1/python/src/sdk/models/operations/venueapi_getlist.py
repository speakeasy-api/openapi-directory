import dataclasses
from typing import Optional
from enum import Enum
from ..shared import partialfindresult_venueforapicontract_ as shared_partialfindresult_venueforapicontract_

class VenueAPIGetListDistanceUnitEnum(str, Enum):
    KILOMETERS = "Kilometers"
    MILES = "Miles"

class VenueAPIGetListFieldsEnum(str, Enum):
    NONE = "None"
    ADDITIONAL_NAMES = "AdditionalNames"
    DESCRIPTION = "Description"
    EVENTS = "Events"
    NAMES = "Names"
    WEB_LINKS = "WebLinks"

class VenueAPIGetListLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"

class VenueAPIGetListNameMatchModeEnum(str, Enum):
    AUTO = "Auto"
    PARTIAL = "Partial"
    STARTS_WITH = "StartsWith"
    EXACT = "Exact"
    WORDS = "Words"

class VenueAPIGetListSortRuleEnum(str, Enum):
    NONE = "None"
    NAME = "Name"
    DISTANCE = "Distance"


@dataclasses.dataclass
class VenueAPIGetListQueryParams:
    distance_unit: Optional[VenueAPIGetListDistanceUnitEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'distanceUnit', 'style': 'form', 'explode': True }})
    fields: Optional[VenueAPIGetListFieldsEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    get_total_count: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'getTotalCount', 'style': 'form', 'explode': True }})
    lang: Optional[VenueAPIGetListLangEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    latitude: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'latitude', 'style': 'form', 'explode': True }})
    longitude: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'longitude', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    name_match_mode: Optional[VenueAPIGetListNameMatchModeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nameMatchMode', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    radius: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'radius', 'style': 'form', 'explode': True }})
    sort_rule: Optional[VenueAPIGetListSortRuleEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sortRule', 'style': 'form', 'explode': True }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class VenueAPIGetListRequest:
    query_params: VenueAPIGetListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class VenueAPIGetListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    partial_find_result_venue_for_api_contract_: Optional[shared_partialfindresult_venueforapicontract_.PartialFindResultVenueForAPIContract] = dataclasses.field(default=None)
    
