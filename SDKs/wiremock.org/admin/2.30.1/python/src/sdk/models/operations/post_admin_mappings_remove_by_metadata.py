import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostAdminMappingsRemoveByMetadataRequestBodyStringEquals:
    equal_to: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('equalTo') }})
    case_insensitive: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caseInsensitive') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAdminMappingsRemoveByMetadataRequestBodyStringContains:
    contains: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contains') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAdminMappingsRemoveByMetadataRequestBodyRegularExpressionMatch:
    matches: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('matches') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAdminMappingsRemoveByMetadataRequestBodyNegativeRegularExpressionMatch:
    does_not_match: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('doesNotMatch') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAdminMappingsRemoveByMetadataRequestBodyJSONEquals:
    equal_to_json: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('equalToJson') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAdminMappingsRemoveByMetadataRequestBodyJSONPathMatch:
    matches_json_path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchesJsonPath') }})
    ignore_array_order: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignoreArrayOrder') }})
    ignore_extra_elements: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignoreExtraElements') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAdminMappingsRemoveByMetadataRequestBodyXMLEquality:
    equal_to_xml: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('equalToXml') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAdminMappingsRemoveByMetadataRequestBodyXPathMatch:
    matches_xpath: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchesXpath') }})
    namespaces: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespaces') }})
    value_pattern: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valuePattern') }})
    

@dataclasses.dataclass
class PostAdminMappingsRemoveByMetadataRequest:
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostAdminMappingsRemoveByMetadataResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
