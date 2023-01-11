package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListArchivedFiles200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public String from;
    public ListArchivedFiles200ApplicationJson withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meetings")
    public ListArchivedFiles200ApplicationJsonMeetings[] meetings;
    public ListArchivedFiles200ApplicationJson withMeetings(ListArchivedFiles200ApplicationJsonMeetings[] meetings) {
        this.meetings = meetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_token")
    public String nextPageToken;
    public ListArchivedFiles200ApplicationJson withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public ListArchivedFiles200ApplicationJson withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public String to;
    public ListArchivedFiles200ApplicationJson withTo(String to) {
        this.to = to;
        return this;
    }
}