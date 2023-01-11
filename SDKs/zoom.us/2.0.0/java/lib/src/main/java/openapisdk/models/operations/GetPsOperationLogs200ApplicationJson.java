package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetPsOperationLogs200ApplicationJson
 * Pagination object.
**/
public class GetPsOperationLogs200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_token")
    public String nextPageToken;
    public GetPsOperationLogs200ApplicationJson withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operation_logs")
    public GetPsOperationLogs200ApplicationJsonOperationLogs[] operationLogs;
    public GetPsOperationLogs200ApplicationJson withOperationLogs(GetPsOperationLogs200ApplicationJsonOperationLogs[] operationLogs) {
        this.operationLogs = operationLogs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public GetPsOperationLogs200ApplicationJson withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}