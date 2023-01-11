import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import partialfindresult_activityentryforapicontract_ as shared_partialfindresult_activityentryforapicontract_

class ActivityEntryAPIGetListEditEventEnum(str, Enum):
    CREATED = "Created"
    UPDATED = "Updated"
    DELETED = "Deleted"
    RESTORED = "Restored"

class ActivityEntryAPIGetListEntryFieldsEnum(str, Enum):
    NONE = "None"
    ADDITIONAL_NAMES = "AdditionalNames"
    DESCRIPTION = "Description"
    MAIN_PICTURE = "MainPicture"
    NAMES = "Names"
    P_VS = "PVs"
    TAGS = "Tags"
    WEB_LINKS = "WebLinks"

class ActivityEntryAPIGetListEntryTypeEnum(str, Enum):
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

class ActivityEntryAPIGetListFieldsEnum(str, Enum):
    NONE = "None"
    ARCHIVED_VERSION = "ArchivedVersion"
    ENTRY = "Entry"

class ActivityEntryAPIGetListLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"

class ActivityEntryAPIGetListSortRuleEnum(str, Enum):
    CREATE_DATE_DESCENDING = "CreateDateDescending"
    CREATE_DATE = "CreateDate"


@dataclasses.dataclass
class ActivityEntryAPIGetListQueryParams:
    before: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'before', 'style': 'form', 'explode': True }})
    edit_event: Optional[ActivityEntryAPIGetListEditEventEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'editEvent', 'style': 'form', 'explode': True }})
    entry_fields: Optional[ActivityEntryAPIGetListEntryFieldsEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'entryFields', 'style': 'form', 'explode': True }})
    entry_type: Optional[ActivityEntryAPIGetListEntryTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'entryType', 'style': 'form', 'explode': True }})
    fields: Optional[ActivityEntryAPIGetListFieldsEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    get_total_count: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'getTotalCount', 'style': 'form', 'explode': True }})
    lang: Optional[ActivityEntryAPIGetListLangEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    since: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    sort_rule: Optional[ActivityEntryAPIGetListSortRuleEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sortRule', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ActivityEntryAPIGetListRequest:
    query_params: ActivityEntryAPIGetListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ActivityEntryAPIGetListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    partial_find_result_activity_entry_for_api_contract_: Optional[shared_partialfindresult_activityentryforapicontract_.PartialFindResultActivityEntryForAPIContract] = dataclasses.field(default=None)
    
