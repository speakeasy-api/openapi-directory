import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import channel as shared_channel


@dataclasses.dataclass
class GetChannelSubscriptionsPathParams:
    user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    
class GetChannelSubscriptionsDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetChannelSubscriptionsFilterEnum(str, Enum):
    MODERATED = "moderated"

class GetChannelSubscriptionsSortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    DATE = "date"
    FOLLOWERS = "followers"
    VIDEOS = "videos"


@dataclasses.dataclass
class GetChannelSubscriptionsQueryParams:
    direction: Optional[GetChannelSubscriptionsDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    filter: Optional[GetChannelSubscriptionsFilterEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[GetChannelSubscriptionsSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetChannelSubscriptionsRequest:
    path_params: GetChannelSubscriptionsPathParams = dataclasses.field()
    query_params: GetChannelSubscriptionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetChannelSubscriptionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    channels: Optional[list[shared_channel.Channel]] = dataclasses.field(default=None)
    
