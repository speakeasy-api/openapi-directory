package openapisdk.models.operations;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImChatSessions200ApplicationJson
 * Pagination object.
**/
public class ImChatSessions200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public LocalDate from;
    public ImChatSessions200ApplicationJson withFrom(LocalDate from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_token")
    public String nextPageToken;
    public ImChatSessions200ApplicationJson withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public ImChatSessions200ApplicationJson withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sessions")
    public ImChatSessions200ApplicationJsonSessions[] sessions;
    public ImChatSessions200ApplicationJson withSessions(ImChatSessions200ApplicationJsonSessions[] sessions) {
        this.sessions = sessions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public LocalDate to;
    public ImChatSessions200ApplicationJson withTo(LocalDate to) {
        this.to = to;
        return this;
    }
}