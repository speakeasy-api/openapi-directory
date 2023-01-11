import dataclasses
from typing import Optional
from enum import Enum
from ..shared import tagforapicontract as shared_tagforapicontract


@dataclasses.dataclass
class TagAPIGetByNamePathParams:
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    
class TagAPIGetByNameFieldsEnum(str, Enum):
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

class TagAPIGetByNameLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"


@dataclasses.dataclass
class TagAPIGetByNameQueryParams:
    fields: Optional[TagAPIGetByNameFieldsEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    lang: Optional[TagAPIGetByNameLangEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TagAPIGetByNameRequest:
    path_params: TagAPIGetByNamePathParams = dataclasses.field()
    query_params: TagAPIGetByNameQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class TagAPIGetByNameResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    tag_for_api_contract: Optional[shared_tagforapicontract.TagForAPIContract] = dataclasses.field(default=None)
    
