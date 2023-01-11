import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class OrderItem:
    r"""OrderItem
    Represents an order item. An order item is a sales item within an order in the context of the recurring subscription business model. It can be a unit of products or a service, but defined by both quantity and term (the start and end dates). 
    
    For the one time and the recurring charge types, if an order action causes a quantity metric creation (when the delta quantity equals to or is greater than zero), an order item is created.
    
    The following order actions will create an order item for the one time and recurring charges. The other order actions will refer to an existing order item. Also, the Owner Transfer order action always creates an order item whose quantity field is zero.
    
      * Create Subscription
      * Terms and Conditions - Extend Term
      * Renewal
      * Update Product - Increase Quantity
      * Add product
      * Owner Transfer
    
    For the usage charge type, if the order action causes a usage increase, an order item is created, and the quantity field of the order item is always zero.
    
    The following order actions will create an order item for for the usage charges.
    
      * Create Subscription
      * Terms and Conditions - Extend Term
      * Renewal
      * Add product
      * Owner Transfer
    
    """
    
    end_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    order_action_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderActionId') }})
    quantity: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    sc_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scId') }})
    start_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
