package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NotificationsHistoryDeletionTaskResponse
 * The notification history deletion task information.
**/
public class NotificationsHistoryDeletionTaskResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public NotificationsHistoryDeletionTaskResponse withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdBy")
    public String createdBy;
    public NotificationsHistoryDeletionTaskResponse withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdOn")
    public Long createdOn;
    public NotificationsHistoryDeletionTaskResponse withCreatedOn(Long createdOn) {
        this.createdOn = createdOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public NotificationsHistoryDeletionTaskResponse withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public NotificationsHistoryDeletionTaskResponseStatusEnum status;
    public NotificationsHistoryDeletionTaskResponse withStatus(NotificationsHistoryDeletionTaskResponseStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tenantId")
    public String tenantId;
    public NotificationsHistoryDeletionTaskResponse withTenantId(String tenantId) {
        this.tenantId = tenantId;
        return this;
    }
}