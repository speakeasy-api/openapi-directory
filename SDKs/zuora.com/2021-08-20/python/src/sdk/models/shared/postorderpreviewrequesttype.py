import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import previeworderorderaction as shared_previeworderorderaction
from ..shared import quoteobjectfields as shared_quoteobjectfields
from ..shared import ramprequest as shared_ramprequest
from ..shared import orderlineitemcommonpostorder as shared_orderlineitemcommonpostorder
from ..shared import previewaccountinfo as shared_previewaccountinfo
from ..shared import previewoptions as shared_previewoptions


@dataclass_json
@dataclasses.dataclass
class PostOrderPreviewRequestTypeSubscriptions:
    custom_fields: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFields') }})
    order_actions: Optional[list[shared_previeworderorderaction.PreviewOrderOrderAction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderActions') }})
    quote: Optional[shared_quoteobjectfields.QuoteObjectFields] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quote') }})
    ramp: Optional[shared_ramprequest.RampRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ramp') }})
    subscription_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionNumber') }})
    

@dataclass_json
@dataclasses.dataclass
class PostOrderPreviewRequestType:
    order_date: date = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderDate'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    preview_options: shared_previewoptions.PreviewOptions = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('previewOptions') }})
    subscriptions: list[PostOrderPreviewRequestTypeSubscriptions] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptions') }})
    custom_fields: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFields') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    existing_account_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('existingAccountNumber') }})
    order_line_items: Optional[list[shared_orderlineitemcommonpostorder.OrderLineItemCommonPostOrder]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderLineItems') }})
    order_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderNumber') }})
    preview_account_info: Optional[shared_previewaccountinfo.PreviewAccountInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previewAccountInfo') }})
    
