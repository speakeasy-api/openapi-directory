package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateChannelApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("members")
    public CreateChannelApplicationJsonMembers[] members;
    public CreateChannelApplicationJson withMembers(CreateChannelApplicationJsonMembers[] members) {
        this.members = members;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CreateChannelApplicationJson withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Long type;
    public CreateChannelApplicationJson withType(Long type) {
        this.type = type;
        return this;
    }
}