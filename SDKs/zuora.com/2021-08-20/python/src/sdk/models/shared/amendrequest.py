import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import electronicpaymentoptions as shared_electronicpaymentoptions
from ..shared import externalpaymentoptions as shared_externalpaymentoptions
from ..shared import invoiceprocessingoptions as shared_invoiceprocessingoptions
from ..shared import amendment as shared_amendment


@dataclass_json
@dataclasses.dataclass
class AmendRequestAmendOptions:
    r"""AmendRequestAmendOptions
    Use the `AmendOptions` container to specify billing options, such as invoice generation and when to process payments.
    
    """
    
    application_order: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationOrder') }})
    apply_credit: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplyCredit') }})
    apply_credit_balance: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplyCreditBalance') }})
    electronic_payment_options: Optional[shared_electronicpaymentoptions.ElectronicPaymentOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ElectronicPaymentOptions') }})
    external_payment_options: Optional[shared_externalpaymentoptions.ExternalPaymentOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExternalPaymentOptions') }})
    generate_invoice: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GenerateInvoice') }})
    invoice_processing_options: Optional[shared_invoiceprocessingoptions.InvoiceProcessingOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InvoiceProcessingOptions') }})
    process_payments: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessPayments') }})
    

@dataclass_json
@dataclasses.dataclass
class AmendRequestPreviewOptions:
    r"""AmendRequestPreviewOptions
    Use the `PreviewOptions` container to preview an amendment before committing its changes to a subscription. 
    You can use a preview to provide a quote of the new charges to a customer before the customer commits to the amended subscription. 
    For example, make an Amend call with an Amendment object that removes an existing rate plan, 
    another Amendment object that adds a new rate plan, and turn on the preview options.
    
    """
    
    enable_preview_mode: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnablePreviewMode') }})
    include_existing_draft_invoice_items: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncludeExistingDraftInvoiceItems') }})
    number_of_periods: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfPeriods') }})
    preview_through_term_end: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreviewThroughTermEnd') }})
    preview_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreviewType') }})
    

@dataclass_json
@dataclasses.dataclass
class AmendRequest:
    amendments: list[shared_amendment.Amendment] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amendments') }})
    amend_options: Optional[AmendRequestAmendOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AmendOptions') }})
    preview_options: Optional[AmendRequestPreviewOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreviewOptions') }})
    
