import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import calloutauth as shared_calloutauth
from ..shared import filterruleparameterdefinition as shared_filterruleparameterdefinition

class PutPublicNotificationDefinitionRequestCalloutHTTPMethodEnum(str, Enum):
    GET = "GET"
    PUT = "PUT"
    POST = "POST"
    DELETE = "DELETE"


@dataclass_json
@dataclasses.dataclass
class PutPublicNotificationDefinitionRequestCallout:
    callout_baseurl: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('calloutBaseurl') }})
    http_method: PutPublicNotificationDefinitionRequestCalloutHTTPMethodEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpMethod') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    required_auth: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requiredAuth') }})
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    callout_auth: Optional[shared_calloutauth.CalloutAuth] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calloutAuth') }})
    callout_params: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calloutParams') }})
    callout_retry: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calloutRetry') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    

@dataclass_json
@dataclasses.dataclass
class PutPublicNotificationDefinitionRequestFilterRule:
    condition: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    parameters: dict[str, shared_filterruleparameterdefinition.FilterRuleParameterDefinition] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    

@dataclass_json
@dataclasses.dataclass
class PutPublicNotificationDefinitionRequest:
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    callout: Optional[PutPublicNotificationDefinitionRequestCallout] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callout') }})
    callout_active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calloutActive') }})
    communication_profile_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('communicationProfileId') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    email_active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailActive') }})
    email_template_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailTemplateId') }})
    filter_rule: Optional[PutPublicNotificationDefinitionRequestFilterRule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterRule') }})
    filter_rule_params: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterRuleParams') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
