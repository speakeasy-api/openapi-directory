import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import channel as shared_channel
from ..shared import legacy_error as shared_legacy_error

class GetChannelsDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetChannelsFilterEnum(str, Enum):
    FEATURED = "featured"

class GetChannelsSortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    DATE = "date"
    FOLLOWERS = "followers"
    RELEVANT = "relevant"
    VIDEOS = "videos"


@dataclasses.dataclass
class GetChannelsQueryParams:
    direction: Optional[GetChannelsDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    filter: Optional[GetChannelsFilterEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[GetChannelsSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetChannelsRequest:
    query_params: GetChannelsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetChannelsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    channels: Optional[list[shared_channel.Channel]] = dataclasses.field(default=None)
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    
