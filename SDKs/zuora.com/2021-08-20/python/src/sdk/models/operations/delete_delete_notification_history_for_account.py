import dataclasses
from typing import Optional
from ..shared import errorresponse as shared_errorresponse
from ..shared import notificationshistorydeletiontaskresponse as shared_notificationshistorydeletiontaskresponse


@dataclasses.dataclass
class DeleteDeleteNotificationHistoryForAccountQueryParams:
    account_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'accountId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteDeleteNotificationHistoryForAccountHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteDeleteNotificationHistoryForAccountRequest:
    headers: DeleteDeleteNotificationHistoryForAccountHeaders = dataclasses.field()
    query_params: DeleteDeleteNotificationHistoryForAccountQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteDeleteNotificationHistoryForAccountResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_delete_notification_history_for_account_400_application_json_string: Optional[str] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    notifications_history_deletion_task_response: Optional[shared_notificationshistorydeletiontaskresponse.NotificationsHistoryDeletionTaskResponse] = dataclasses.field(default=None)
    
