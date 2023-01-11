import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import legacy_error as shared_legacy_error
from ..shared import user as shared_user


@dataclasses.dataclass
class GetChannelSubscribersPathParams:
    channel_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    
class GetChannelSubscribersDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetChannelSubscribersFilterEnum(str, Enum):
    MODERATORS = "moderators"

class GetChannelSubscribersSortEnum(str, Enum):
    ALPHABETICAL = "alphabetical"
    DATE = "date"


@dataclasses.dataclass
class GetChannelSubscribersQueryParams:
    filter: GetChannelSubscribersFilterEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    direction: Optional[GetChannelSubscribersDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[GetChannelSubscribersSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetChannelSubscribersRequest:
    path_params: GetChannelSubscribersPathParams = dataclasses.field()
    query_params: GetChannelSubscribersQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetChannelSubscribersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    users: Optional[list[shared_user.User]] = dataclasses.field(default=None)
    
