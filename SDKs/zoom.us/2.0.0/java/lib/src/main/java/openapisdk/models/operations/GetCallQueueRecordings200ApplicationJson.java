package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetCallQueueRecordings200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public String from;
    public GetCallQueueRecordings200ApplicationJson withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_token")
    public String nextPageToken;
    public GetCallQueueRecordings200ApplicationJson withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public GetCallQueueRecordings200ApplicationJson withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recordings")
    public GetCallQueueRecordings200ApplicationJsonRecordings[] recordings;
    public GetCallQueueRecordings200ApplicationJson withRecordings(GetCallQueueRecordings200ApplicationJsonRecordings[] recordings) {
        this.recordings = recordings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public String to;
    public GetCallQueueRecordings200ApplicationJson withTo(String to) {
        this.to = to;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_records")
    public String totalRecords;
    public GetCallQueueRecordings200ApplicationJson withTotalRecords(String totalRecords) {
        this.totalRecords = totalRecords;
        return this;
    }
}