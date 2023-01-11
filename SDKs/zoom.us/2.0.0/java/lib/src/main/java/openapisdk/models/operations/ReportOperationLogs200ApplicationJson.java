package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportOperationLogs200ApplicationJson
 * Pagination object.
**/
public class ReportOperationLogs200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_token")
    public String nextPageToken;
    public ReportOperationLogs200ApplicationJson withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operation_logs")
    public ReportOperationLogs200ApplicationJsonOperationLogs[] operationLogs;
    public ReportOperationLogs200ApplicationJson withOperationLogs(ReportOperationLogs200ApplicationJsonOperationLogs[] operationLogs) {
        this.operationLogs = operationLogs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public ReportOperationLogs200ApplicationJson withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}