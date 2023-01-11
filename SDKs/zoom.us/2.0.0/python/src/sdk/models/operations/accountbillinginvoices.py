import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class AccountBillingInvoicesPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AccountBillingInvoicesQueryParams:
    from_: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    to: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class AccountBillingInvoices200ApplicationJSONInvoices:
    balance: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('balance') }})
    due_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('due_date') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    invoice_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoice_date') }})
    invoice_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoice_number') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    target_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_date') }})
    tax_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax_amount') }})
    total_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_amount') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountBillingInvoices200ApplicationJSON:
    currency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    invoices: Optional[list[AccountBillingInvoices200ApplicationJSONInvoices]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoices') }})
    

@dataclasses.dataclass
class AccountBillingInvoicesRequest:
    path_params: AccountBillingInvoicesPathParams = dataclasses.field()
    query_params: AccountBillingInvoicesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class AccountBillingInvoicesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    account_billing_invoices_200_application_json_object: Optional[AccountBillingInvoices200ApplicationJSON] = dataclasses.field(default=None)
    
