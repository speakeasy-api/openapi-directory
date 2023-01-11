import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import channel as shared_channel
from ..shared import legacy_error as shared_legacy_error


@dataclasses.dataclass
class GetCategoryChannelsPathParams:
    category: str = dataclasses.field(metadata={'path_param': { 'field_name': 'category', 'style': 'simple', 'explode': False }})
    
class GetCategoryChannelsDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetCategoryChannelsSortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    DATE = "date"
    FOLLOWERS = "followers"
    VIDEOS = "videos"


@dataclasses.dataclass
class GetCategoryChannelsQueryParams:
    direction: Optional[GetCategoryChannelsDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[GetCategoryChannelsSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCategoryChannelsRequest:
    path_params: GetCategoryChannelsPathParams = dataclasses.field()
    query_params: GetCategoryChannelsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCategoryChannelsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    channels: Optional[list[shared_channel.Channel]] = dataclasses.field(default=None)
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    
