import dataclasses
from typing import Optional
from ..shared import getbillingdocumentfilesdeletionjobresponse as shared_getbillingdocumentfilesdeletionjobresponse


@dataclasses.dataclass
class GetBillingDocumentFilesDeletionJobPathParams:
    job_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'jobId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetBillingDocumentFilesDeletionJobHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetBillingDocumentFilesDeletionJobRequest:
    headers: GetBillingDocumentFilesDeletionJobHeaders = dataclasses.field()
    path_params: GetBillingDocumentFilesDeletionJobPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetBillingDocumentFilesDeletionJobResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_billing_document_files_deletion_job_response: Optional[shared_getbillingdocumentfilesdeletionjobresponse.GetBillingDocumentFilesDeletionJobResponse] = dataclasses.field(default=None)
    
