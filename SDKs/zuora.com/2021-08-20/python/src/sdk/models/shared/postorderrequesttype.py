import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import createorderorderaction as shared_createorderorderaction
from ..shared import quoteobjectfields as shared_quoteobjectfields
from ..shared import ramprequest as shared_ramprequest
from ..shared import orderlineitemcommonpostorder as shared_orderlineitemcommonpostorder
from ..shared import processingoptions as shared_processingoptions


@dataclass_json
@dataclasses.dataclass
class PostOrderRequestTypeSubscriptions:
    custom_fields: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFields') }})
    order_actions: Optional[list[shared_createorderorderaction.CreateOrderOrderAction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderActions') }})
    quote: Optional[shared_quoteobjectfields.QuoteObjectFields] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quote') }})
    ramp: Optional[shared_ramprequest.RampRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ramp') }})
    subscription_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionNumber') }})
    

@dataclass_json
@dataclasses.dataclass
class PostOrderRequestType:
    order_date: date = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderDate'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    subscriptions: list[PostOrderRequestTypeSubscriptions] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptions') }})
    custom_fields: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFields') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    existing_account_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('existingAccountNumber') }})
    new_account: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newAccount') }})
    order_line_items: Optional[list[shared_orderlineitemcommonpostorder.OrderLineItemCommonPostOrder]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderLineItems') }})
    order_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderNumber') }})
    processing_options: Optional[shared_processingoptions.ProcessingOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processingOptions') }})
    
