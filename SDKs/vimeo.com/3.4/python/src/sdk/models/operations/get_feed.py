import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import activity_3_1 as shared_activity_3_1


@dataclasses.dataclass
class GetFeedPathParams:
    user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    
class GetFeedTypeEnum(str, Enum):
    APPEARS = "appears"
    CATEGORY_FEATURED = "category_featured"
    CHANNEL = "channel"
    FACEBOOK_FEED = "facebook_feed"
    FOLLOWING = "following"
    GROUP = "group"
    LIKES = "likes"
    ONDEMAND_PUBLISH = "ondemand_publish"
    SHARE = "share"
    TAGGED_WITH = "tagged_with"
    TWITTER_TIMELINE = "twitter_timeline"
    UPLOADS = "uploads"


@dataclasses.dataclass
class GetFeedQueryParams:
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    type: Optional[GetFeedTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetFeedSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetFeedRequest:
    path_params: GetFeedPathParams = dataclasses.field()
    query_params: GetFeedQueryParams = dataclasses.field()
    security: GetFeedSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetFeedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    activity_3_1s: Optional[list[shared_activity_3_1.Activity31]] = dataclasses.field(default=None)
    
