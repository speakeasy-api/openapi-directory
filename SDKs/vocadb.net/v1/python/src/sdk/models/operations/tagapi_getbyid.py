import dataclasses
from typing import Optional
from enum import Enum
from ..shared import tagforapicontract as shared_tagforapicontract


@dataclasses.dataclass
class TagAPIGetByIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class TagAPIGetByIDFieldsEnum(str, Enum):
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

class TagAPIGetByIDLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"


@dataclasses.dataclass
class TagAPIGetByIDQueryParams:
    fields: Optional[TagAPIGetByIDFieldsEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    lang: Optional[TagAPIGetByIDLangEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TagAPIGetByIDRequest:
    path_params: TagAPIGetByIDPathParams = dataclasses.field()
    query_params: TagAPIGetByIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class TagAPIGetByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    tag_for_api_contract: Optional[shared_tagforapicontract.TagForAPIContract] = dataclasses.field(default=None)
    
