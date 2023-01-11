import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DownloadInvoicePdfPathParams:
    invoice_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'invoiceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DownloadInvoicePdfRequest:
    path_params: DownloadInvoicePdfPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DownloadInvoicePdfResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    download_invoice_pdf_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
