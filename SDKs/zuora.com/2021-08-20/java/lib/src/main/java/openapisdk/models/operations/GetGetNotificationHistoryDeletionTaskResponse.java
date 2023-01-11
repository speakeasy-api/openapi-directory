package openapisdk.models.operations;



public class GetGetNotificationHistoryDeletionTaskResponse {
    public String contentType;
    public GetGetNotificationHistoryDeletionTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetGetNotificationHistoryDeletionTaskResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetGetNotificationHistoryDeletionTaskResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.NotificationsHistoryDeletionTaskResponse notificationsHistoryDeletionTaskResponse;
    public GetGetNotificationHistoryDeletionTaskResponse withNotificationsHistoryDeletionTaskResponse(openapisdk.models.shared.NotificationsHistoryDeletionTaskResponse notificationsHistoryDeletionTaskResponse) {
        this.notificationsHistoryDeletionTaskResponse = notificationsHistoryDeletionTaskResponse;
        return this;
    }
    public Long statusCode;
    public GetGetNotificationHistoryDeletionTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}