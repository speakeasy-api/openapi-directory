package openapisdk.models.operations;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetChatMessages200ApplicationJson
 * Chat message object.
**/
public class GetChatMessages200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date")
    public LocalDate date;
    public GetChatMessages200ApplicationJson withDate(LocalDate date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messages")
    public GetChatMessages200ApplicationJsonMessages[] messages;
    public GetChatMessages200ApplicationJson withMessages(GetChatMessages200ApplicationJsonMessages[] messages) {
        this.messages = messages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_token")
    public String nextPageToken;
    public GetChatMessages200ApplicationJson withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public GetChatMessages200ApplicationJson withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}