package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GroupMembersCreateMultipartFormDataMembers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public GroupMembersCreateMultipartFormDataMembers withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GroupMembersCreateMultipartFormDataMembers withId(String id) {
        this.id = id;
        return this;
    }
}