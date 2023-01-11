import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class ListMeetingTemplatesPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ListMeetingTemplates200ApplicationJSONTemplates:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class ListMeetingTemplates200ApplicationJSON:
    templates: Optional[list[ListMeetingTemplates200ApplicationJSONTemplates]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('templates') }})
    total_records: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_records') }})
    

@dataclasses.dataclass
class ListMeetingTemplatesRequest:
    path_params: ListMeetingTemplatesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ListMeetingTemplatesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    list_meeting_templates_200_application_json_object: Optional[ListMeetingTemplates200ApplicationJSON] = dataclasses.field(default=None)
    
