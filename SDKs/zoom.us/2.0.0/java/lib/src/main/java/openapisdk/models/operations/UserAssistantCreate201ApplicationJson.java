package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class UserAssistantCreate201ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("add_at")
    public OffsetDateTime addAt;
    public UserAssistantCreate201ApplicationJson withAddAt(OffsetDateTime addAt) {
        this.addAt = addAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ids")
    public String ids;
    public UserAssistantCreate201ApplicationJson withIds(String ids) {
        this.ids = ids;
        return this;
    }
}