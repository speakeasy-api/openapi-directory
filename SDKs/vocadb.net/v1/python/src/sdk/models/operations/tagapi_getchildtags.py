import dataclasses
from typing import Optional
from enum import Enum
from ..shared import tagforapicontract as shared_tagforapicontract


@dataclasses.dataclass
class TagAPIGetChildTagsPathParams:
    tag_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'tagId', 'style': 'simple', 'explode': False }})
    
class TagAPIGetChildTagsFieldsEnum(str, Enum):
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

class TagAPIGetChildTagsLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"


@dataclasses.dataclass
class TagAPIGetChildTagsQueryParams:
    fields: Optional[TagAPIGetChildTagsFieldsEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    lang: Optional[TagAPIGetChildTagsLangEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TagAPIGetChildTagsRequest:
    path_params: TagAPIGetChildTagsPathParams = dataclasses.field()
    query_params: TagAPIGetChildTagsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class TagAPIGetChildTagsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    tag_for_api_contracts: Optional[list[shared_tagforapicontract.TagForAPIContract]] = dataclasses.field(default=None)
    
