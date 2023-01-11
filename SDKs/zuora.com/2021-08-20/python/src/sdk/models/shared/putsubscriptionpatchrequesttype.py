import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PutSubscriptionPatchRequestTypeRatePlansCharges:
    charge_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargeId') }})
    charge_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargeNumber') }})
    custom_fields: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFields') }})
    

@dataclass_json
@dataclasses.dataclass
class PutSubscriptionPatchRequestTypeRatePlans:
    rate_plan_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ratePlanId') }})
    charges: Optional[list[PutSubscriptionPatchRequestTypeRatePlansCharges]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('charges') }})
    custom_fields: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFields') }})
    

@dataclass_json
@dataclasses.dataclass
class PutSubscriptionPatchRequestType:
    custom_fields: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFields') }})
    rate_plans: Optional[list[PutSubscriptionPatchRequestTypeRatePlans]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ratePlans') }})
    
