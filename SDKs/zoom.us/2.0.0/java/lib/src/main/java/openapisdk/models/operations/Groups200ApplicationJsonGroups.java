package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Groups200ApplicationJsonGroups
 * Group object.
**/
public class Groups200ApplicationJsonGroups {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Groups200ApplicationJsonGroups withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Groups200ApplicationJsonGroups withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_members")
    public Long totalMembers;
    public Groups200ApplicationJsonGroups withTotalMembers(Long totalMembers) {
        this.totalMembers = totalMembers;
        return this;
    }
}