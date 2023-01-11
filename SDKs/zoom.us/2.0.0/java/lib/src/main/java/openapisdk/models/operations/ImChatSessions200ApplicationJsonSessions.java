package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ImChatSessions200ApplicationJsonSessions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("last_message_sent_time")
    public OffsetDateTime lastMessageSentTime;
    public ImChatSessions200ApplicationJsonSessions withLastMessageSentTime(OffsetDateTime lastMessageSentTime) {
        this.lastMessageSentTime = lastMessageSentTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ImChatSessions200ApplicationJsonSessions withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("session_id")
    public String sessionId;
    public ImChatSessions200ApplicationJsonSessions withSessionId(String sessionId) {
        this.sessionId = sessionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ImChatSessions200ApplicationJsonSessionsTypeEnum type;
    public ImChatSessions200ApplicationJsonSessions withType(ImChatSessions200ApplicationJsonSessionsTypeEnum type) {
        this.type = type;
        return this;
    }
}