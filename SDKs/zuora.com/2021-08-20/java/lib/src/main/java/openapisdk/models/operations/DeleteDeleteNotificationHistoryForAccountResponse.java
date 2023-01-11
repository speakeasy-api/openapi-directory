package openapisdk.models.operations;



public class DeleteDeleteNotificationHistoryForAccountResponse {
    public String contentType;
    public DeleteDeleteNotificationHistoryForAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public String deleteDELETENotificationHistoryForAccount400ApplicationJSONString;
    public DeleteDeleteNotificationHistoryForAccountResponse withDeleteDeleteNotificationHistoryForAccount400ApplicationJsonString(String deleteDELETENotificationHistoryForAccount400ApplicationJSONString) {
        this.deleteDELETENotificationHistoryForAccount400ApplicationJSONString = deleteDELETENotificationHistoryForAccount400ApplicationJSONString;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public DeleteDeleteNotificationHistoryForAccountResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DeleteDeleteNotificationHistoryForAccountResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.NotificationsHistoryDeletionTaskResponse notificationsHistoryDeletionTaskResponse;
    public DeleteDeleteNotificationHistoryForAccountResponse withNotificationsHistoryDeletionTaskResponse(openapisdk.models.shared.NotificationsHistoryDeletionTaskResponse notificationsHistoryDeletionTaskResponse) {
        this.notificationsHistoryDeletionTaskResponse = notificationsHistoryDeletionTaskResponse;
        return this;
    }
    public Long statusCode;
    public DeleteDeleteNotificationHistoryForAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}