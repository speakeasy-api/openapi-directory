import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class ListByocsipTrunkQueryParams:
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'next_page_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListByocsipTrunkSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class ListByocsipTrunk200ApplicationJSONByocSipTrunk:
    carrier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier') }})
    carrier_account: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier_account') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    region: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    sbc_label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sbc_label') }})
    

@dataclass_json
@dataclasses.dataclass
class ListByocsipTrunk200ApplicationJSON:
    byoc_sip_trunk: Optional[list[ListByocsipTrunk200ApplicationJSONByocSipTrunk]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('byoc_sip_trunk') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_token') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    

@dataclasses.dataclass
class ListByocsipTrunkRequest:
    query_params: ListByocsipTrunkQueryParams = dataclasses.field()
    security: ListByocsipTrunkSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListByocsipTrunkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    list_byocsip_trunk_200_application_json_object: Optional[ListByocsipTrunk200ApplicationJSON] = dataclasses.field(default=None)
    
