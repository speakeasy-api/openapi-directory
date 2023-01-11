package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateChannel201ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public CreateChannel201ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jid")
    public String jid;
    public CreateChannel201ApplicationJson withJid(String jid) {
        this.jid = jid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CreateChannel201ApplicationJson withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Long type;
    public CreateChannel201ApplicationJson withType(Long type) {
        this.type = type;
        return this;
    }
}