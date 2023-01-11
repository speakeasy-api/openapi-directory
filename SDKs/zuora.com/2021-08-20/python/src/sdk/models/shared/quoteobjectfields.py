import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class QuoteObjectFields:
    r"""QuoteObjectFields
    The fields populated for a quote when a quote is sent to Zuora Billing from Zuora Quote.
    
    """
    
    opportunity_close_date_qt: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpportunityCloseDate__QT') }})
    opportunity_name_qt: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpportunityName__QT') }})
    quote_business_type_qt: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuoteBusinessType__QT') }})
    quote_number_qt: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuoteNumber__QT') }})
    quote_type_qt: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuoteType__QT') }})
    
