import dataclasses
from typing import Optional
from enum import Enum
from ..shared import partialfindresult_releaseeventseriesforapicontract_ as shared_partialfindresult_releaseeventseriesforapicontract_

class ReleaseEventSeriesAPIGetListFieldsEnum(str, Enum):
    NONE = "None"
    ADDITIONAL_NAMES = "AdditionalNames"
    DESCRIPTION = "Description"
    EVENTS = "Events"
    MAIN_PICTURE = "MainPicture"
    NAMES = "Names"
    WEB_LINKS = "WebLinks"

class ReleaseEventSeriesAPIGetListLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"

class ReleaseEventSeriesAPIGetListNameMatchModeEnum(str, Enum):
    AUTO = "Auto"
    PARTIAL = "Partial"
    STARTS_WITH = "StartsWith"
    EXACT = "Exact"
    WORDS = "Words"


@dataclasses.dataclass
class ReleaseEventSeriesAPIGetListQueryParams:
    fields: Optional[ReleaseEventSeriesAPIGetListFieldsEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    get_total_count: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'getTotalCount', 'style': 'form', 'explode': True }})
    lang: Optional[ReleaseEventSeriesAPIGetListLangEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    name_match_mode: Optional[ReleaseEventSeriesAPIGetListNameMatchModeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nameMatchMode', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReleaseEventSeriesAPIGetListRequest:
    query_params: ReleaseEventSeriesAPIGetListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ReleaseEventSeriesAPIGetListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    partial_find_result_release_event_series_for_api_contract_: Optional[shared_partialfindresult_releaseeventseriesforapicontract_.PartialFindResultReleaseEventSeriesForAPIContract] = dataclasses.field(default=None)
    
