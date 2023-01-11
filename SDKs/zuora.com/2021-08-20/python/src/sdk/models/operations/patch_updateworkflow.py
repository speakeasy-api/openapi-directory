import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deleteworkflowerror as shared_deleteworkflowerror
from ..shared import getworkflowsetupresponse as shared_getworkflowsetupresponse
from ..shared import validationerrors as shared_validationerrors


@dataclasses.dataclass
class PatchUpdateWorkflowPathParams:
    workflow_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workflow_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchUpdateWorkflowHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PatchUpdateWorkflowRequestBody:
    callout_trigger: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callout_trigger') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    interval: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interval') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    ondemand_trigger: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ondemand_trigger') }})
    priority: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    scheduled_trigger: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduled_trigger') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    timezone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    

@dataclasses.dataclass
class PatchUpdateWorkflowRequest:
    headers: PatchUpdateWorkflowHeaders = dataclasses.field()
    path_params: PatchUpdateWorkflowPathParams = dataclasses.field()
    request: Optional[PatchUpdateWorkflowRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchUpdateWorkflowResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_workflow_error: Optional[shared_deleteworkflowerror.DeleteWorkflowError] = dataclasses.field(default=None)
    get_workflow_setup_response: Optional[shared_getworkflowsetupresponse.GetWorkflowSetupResponse] = dataclasses.field(default=None)
    validation_errors: Optional[shared_validationerrors.ValidationErrors] = dataclasses.field(default=None)
    
