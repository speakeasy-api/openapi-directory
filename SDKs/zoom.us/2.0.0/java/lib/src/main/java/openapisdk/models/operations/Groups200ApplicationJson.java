package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Groups200ApplicationJson
 * List of Groups.
**/
public class Groups200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groups")
    public Groups200ApplicationJsonGroups[] groups;
    public Groups200ApplicationJson withGroups(Groups200ApplicationJsonGroups[] groups) {
        this.groups = groups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_records")
    public Long totalRecords;
    public Groups200ApplicationJson withTotalRecords(Long totalRecords) {
        this.totalRecords = totalRecords;
        return this;
    }
}