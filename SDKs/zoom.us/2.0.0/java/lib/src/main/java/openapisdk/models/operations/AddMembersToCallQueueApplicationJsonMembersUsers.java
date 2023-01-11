package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddMembersToCallQueueApplicationJsonMembersUsers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public AddMembersToCallQueueApplicationJsonMembersUsers withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AddMembersToCallQueueApplicationJsonMembersUsers withId(String id) {
        this.id = id;
        return this;
    }
}