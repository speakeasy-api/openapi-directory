"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import video as shared_video
from enum import Enum
from typing import Optional

class GetVodVideosDirectionEnum(str, Enum):
    r"""The sort direction of the results."""
    ASC = 'asc'
    DESC = 'desc'

class GetVodVideosFilterEnum(str, Enum):
    r"""The attribute by which to filter the results."""
    ALL = 'all'
    BUY = 'buy'
    EXPIRING_SOON = 'expiring_soon'
    EXTRA = 'extra'
    MAIN = 'main'
    MAIN_VIEWABLE = 'main.viewable'
    RENT = 'rent'
    TRAILER = 'trailer'
    UNWATCHED = 'unwatched'
    VIEWABLE = 'viewable'
    WATCHED = 'watched'

class GetVodVideosSortEnum(str, Enum):
    r"""The way to sort the results."""
    DATE = 'date'
    DEFAULT = 'default'
    EPISODE = 'episode'
    MANUAL = 'manual'
    NAME = 'name'
    PURCHASE_TIME = 'purchase_time'
    RELEASE_DATE = 'release_date'


@dataclasses.dataclass
class GetVodVideosRequest:
    
    ondemand_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    r"""The ID of the On Demand."""  
    direction: Optional[GetVodVideosDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    r"""The sort direction of the results."""  
    filter: Optional[GetVodVideosFilterEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    r"""The attribute by which to filter the results."""  
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    r"""The page number of the results to show."""  
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    r"""The number of items to show on each page of results, up to a maximum of 100."""  
    sort: Optional[GetVodVideosSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    r"""The way to sort the results."""  
    

@dataclasses.dataclass
class GetVodVideosResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    videos: Optional[list[shared_video.Video]] = dataclasses.field(default=None)
    r"""* The videos were returned.
    * The videos were returned.
    """  
    