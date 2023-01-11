package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddMembersToSharedLineGroupMultipartFormDataMembersUsers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public AddMembersToSharedLineGroupMultipartFormDataMembersUsers withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AddMembersToSharedLineGroupMultipartFormDataMembersUsers withId(String id) {
        this.id = id;
        return this;
    }
}