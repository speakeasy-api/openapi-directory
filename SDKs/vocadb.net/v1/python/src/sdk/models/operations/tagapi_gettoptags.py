import dataclasses
from typing import Optional
from enum import Enum
from ..shared import tagbasecontract as shared_tagbasecontract

class TagAPIGetTopTagsEntryTypeEnum(str, Enum):
    UNDEFINED = "Undefined"
    ALBUM = "Album"
    ARTIST = "Artist"
    DISCUSSION_TOPIC = "DiscussionTopic"
    PV = "PV"
    RELEASE_EVENT = "ReleaseEvent"
    RELEASE_EVENT_SERIES = "ReleaseEventSeries"
    SONG = "Song"
    SONG_LIST = "SongList"
    TAG = "Tag"
    USER = "User"
    VENUE = "Venue"

class TagAPIGetTopTagsLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"


@dataclasses.dataclass
class TagAPIGetTopTagsQueryParams:
    category_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'categoryName', 'style': 'form', 'explode': True }})
    entry_type: Optional[TagAPIGetTopTagsEntryTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'entryType', 'style': 'form', 'explode': True }})
    lang: Optional[TagAPIGetTopTagsLangEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TagAPIGetTopTagsRequest:
    query_params: TagAPIGetTopTagsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class TagAPIGetTopTagsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    tag_base_contracts: Optional[list[shared_tagbasecontract.TagBaseContract]] = dataclasses.field(default=None)
    
