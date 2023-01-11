import dataclasses
from typing import Optional
from enum import Enum
from ..shared import releaseeventseriesforapicontract as shared_releaseeventseriesforapicontract


@dataclasses.dataclass
class ReleaseEventSeriesAPIGetOnePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class ReleaseEventSeriesAPIGetOneFieldsEnum(str, Enum):
    NONE = "None"
    ADDITIONAL_NAMES = "AdditionalNames"
    DESCRIPTION = "Description"
    EVENTS = "Events"
    MAIN_PICTURE = "MainPicture"
    NAMES = "Names"
    WEB_LINKS = "WebLinks"

class ReleaseEventSeriesAPIGetOneLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"


@dataclasses.dataclass
class ReleaseEventSeriesAPIGetOneQueryParams:
    fields: Optional[ReleaseEventSeriesAPIGetOneFieldsEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    lang: Optional[ReleaseEventSeriesAPIGetOneLangEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReleaseEventSeriesAPIGetOneRequest:
    path_params: ReleaseEventSeriesAPIGetOnePathParams = dataclasses.field()
    query_params: ReleaseEventSeriesAPIGetOneQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ReleaseEventSeriesAPIGetOneResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    release_event_series_for_api_contract: Optional[shared_releaseeventseriesforapicontract.ReleaseEventSeriesForAPIContract] = dataclasses.field(default=None)
    
