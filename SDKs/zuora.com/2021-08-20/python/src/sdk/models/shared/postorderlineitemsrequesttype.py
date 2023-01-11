import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import postorderlineitemupdatetype as shared_postorderlineitemupdatetype
from ..shared import processingoptions as shared_processingoptions


@dataclass_json
@dataclasses.dataclass
class PostOrderLineItemsRequestType:
    order_line_items: Optional[list[shared_postorderlineitemupdatetype.PostOrderLineItemUpdateType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderLineItems') }})
    processing_options: Optional[shared_processingoptions.ProcessingOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processingOptions') }})
    
