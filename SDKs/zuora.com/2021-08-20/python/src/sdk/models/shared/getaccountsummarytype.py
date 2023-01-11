import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import getaccountsummaryinvoicetype as shared_getaccountsummaryinvoicetype
from ..shared import getaccountsummarypaymenttype as shared_getaccountsummarypaymenttype
from ..shared import getaccountsummaryusagetype as shared_getaccountsummaryusagetype


@dataclass_json
@dataclasses.dataclass
class GetAccountSummaryTypeTaxInfo:
    r"""GetAccountSummaryTypeTaxInfo
    Container for tax exempt information, used to establish the tax exempt status of a customer account.
    
    """
    
    vat_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VATId') }})
    company_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyCode') }})
    exempt_certificate_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exemptCertificateId') }})
    exempt_certificate_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exemptCertificateType') }})
    exempt_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exemptDescription') }})
    exempt_effective_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exemptEffectiveDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    exempt_entity_use_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exemptEntityUseCode') }})
    exempt_expiration_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exemptExpirationDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    exempt_issuing_jurisdiction: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exemptIssuingJurisdiction') }})
    exempt_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exemptStatus') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAccountSummaryType:
    basic_info: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicInfo') }})
    bill_to_contact: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billToContact') }})
    invoices: Optional[list[shared_getaccountsummaryinvoicetype.GetAccountSummaryInvoiceType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoices') }})
    payments: Optional[list[shared_getaccountsummarypaymenttype.GetAccountSummaryPaymentType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payments') }})
    sold_to_contact: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('soldToContact') }})
    subscriptions: Optional[list[dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptions') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    tax_info: Optional[GetAccountSummaryTypeTaxInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxInfo') }})
    usage: Optional[list[shared_getaccountsummaryusagetype.GetAccountSummaryUsageType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usage') }})
    
