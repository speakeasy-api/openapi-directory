"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from datetime import date
from enum import Enum
from marshmallow import fields
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class DebitMemoTaxItemFromInvoiceTaxItemTypeFinanceInformation:
    r"""Container for the finance information related to the source taxation item."""
    
    sales_tax_payable_accounting_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('salesTaxPayableAccountingCode'), 'exclude': lambda f: f is None }})
    r"""The accounting code for the sales taxes payable."""  
    
class DebitMemoTaxItemFromInvoiceTaxItemTypeTaxRateTypeEnum(str, Enum):
    r"""The type of the tax rate applied to the debit memo."""
    PERCENTAGE = 'Percentage'
    FLAT_FEE = 'FlatFee'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class DebitMemoTaxItemFromInvoiceTaxItemType:
    
    amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('amount'), 'exclude': lambda f: f is None }})
    r"""The amount of the debit memo taxation item."""  
    finance_information: Optional[DebitMemoTaxItemFromInvoiceTaxItemTypeFinanceInformation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('financeInformation'), 'exclude': lambda f: f is None }})
    r"""Container for the finance information related to the source taxation item."""  
    jurisdiction: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('jurisdiction'), 'exclude': lambda f: f is None }})
    r"""The jurisdiction that applies the tax or VAT. This value is typically a state, province, county, or city."""  
    location_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('locationCode'), 'exclude': lambda f: f is None }})
    r"""The identifier for the location based on the value of the `taxCode` field."""  
    source_tax_item_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('sourceTaxItemId'), 'exclude': lambda f: f is None }})
    r"""The ID of the source taxation item."""  
    tax_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('taxCode'), 'exclude': lambda f: f is None }})
    r"""The tax code identifies which tax rules and tax rates to apply to a specific debit memo."""  
    tax_code_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('taxCodeDescription'), 'exclude': lambda f: f is None }})
    r"""The description of the tax code."""  
    tax_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('taxDate'), 'encoder': utils.dateisoformat(True), 'decoder': utils.datefromisoformat, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})
    r"""The date that the tax is applied to the debit memo, in `yyyy-mm-dd` format."""  
    tax_exempt_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('taxExemptAmount'), 'exclude': lambda f: f is None }})
    r"""The amount of taxes or VAT for which the customer has an exemption."""  
    tax_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('taxName'), 'exclude': lambda f: f is None }})
    r"""The name of taxation."""  
    tax_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('taxRate'), 'exclude': lambda f: f is None }})
    r"""The tax rate applied to the debit memo."""  
    tax_rate_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('taxRateDescription'), 'exclude': lambda f: f is None }})
    r"""The description of the tax rate."""  
    tax_rate_type: Optional[DebitMemoTaxItemFromInvoiceTaxItemTypeTaxRateTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('taxRateType'), 'exclude': lambda f: f is None }})
    r"""The type of the tax rate applied to the debit memo."""  
    