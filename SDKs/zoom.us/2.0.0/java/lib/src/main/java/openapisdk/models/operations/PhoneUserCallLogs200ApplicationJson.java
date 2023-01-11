package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PhoneUserCallLogs200ApplicationJson
 * Phone User Call Logs
**/
public class PhoneUserCallLogs200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_logs")
    public PhoneUserCallLogs200ApplicationJsonCallLogs[] callLogs;
    public PhoneUserCallLogs200ApplicationJson withCallLogs(PhoneUserCallLogs200ApplicationJsonCallLogs[] callLogs) {
        this.callLogs = callLogs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public String from;
    public PhoneUserCallLogs200ApplicationJson withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_token")
    public String nextPageToken;
    public PhoneUserCallLogs200ApplicationJson withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_count")
    public Long pageCount;
    public PhoneUserCallLogs200ApplicationJson withPageCount(Long pageCount) {
        this.pageCount = pageCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public PhoneUserCallLogs200ApplicationJson withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public String to;
    public PhoneUserCallLogs200ApplicationJson withTo(String to) {
        this.to = to;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_records")
    public Long totalRecords;
    public PhoneUserCallLogs200ApplicationJson withTotalRecords(Long totalRecords) {
        this.totalRecords = totalRecords;
        return this;
    }
}