import dataclasses
from typing import Optional
from enum import Enum
from ..shared import tagforapicontract as shared_tagforapicontract

class EntryTypesAPIGetMappedTagEntryTypeEnum(str, Enum):
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


@dataclasses.dataclass
class EntryTypesAPIGetMappedTagPathParams:
    entry_type: EntryTypesAPIGetMappedTagEntryTypeEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'entryType', 'style': 'simple', 'explode': False }})
    sub_type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'subType', 'style': 'simple', 'explode': False }})
    
class EntryTypesAPIGetMappedTagFieldsEnum(str, Enum):
    NONE = "None"
    ADDITIONAL_NAMES = "AdditionalNames"
    ALIASED_TO = "AliasedTo"
    DESCRIPTION = "Description"
    MAIN_PICTURE = "MainPicture"
    NAMES = "Names"
    PARENT = "Parent"
    RELATED_TAGS = "RelatedTags"
    TRANSLATED_DESCRIPTION = "TranslatedDescription"
    WEB_LINKS = "WebLinks"


@dataclasses.dataclass
class EntryTypesAPIGetMappedTagQueryParams:
    fields: Optional[EntryTypesAPIGetMappedTagFieldsEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EntryTypesAPIGetMappedTagRequest:
    path_params: EntryTypesAPIGetMappedTagPathParams = dataclasses.field()
    query_params: EntryTypesAPIGetMappedTagQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class EntryTypesAPIGetMappedTagResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    tag_for_api_contract: Optional[shared_tagforapicontract.TagForAPIContract] = dataclasses.field(default=None)
    
