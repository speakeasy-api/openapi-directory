import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import billingupdate as shared_billingupdate
from ..shared import triggerparams as shared_triggerparams
from ..shared import pricingupdateforevergreen as shared_pricingupdateforevergreen


@dataclass_json
@dataclasses.dataclass
class ChargeUpdateForEvergreen:
    r"""ChargeUpdateForEvergreen
    The JSON object containing the information for a charge update in the 'UpdateProduct' type order action.
    """
    
    billing: Optional[shared_billingupdate.BillingUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billing') }})
    charge_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargeNumber') }})
    custom_fields: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFields') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    effective_date: Optional[shared_triggerparams.TriggerParams] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveDate') }})
    pricing: Optional[shared_pricingupdateforevergreen.PricingUpdateForEvergreen] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pricing') }})
    unique_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uniqueToken') }})
    
