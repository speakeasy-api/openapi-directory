package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImGroupsImGroupList
 * List of IM Groups.
**/
public class ImGroupsImGroupList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groups")
    public ImGroupsImGroupListGroups[] groups;
    public ImGroupsImGroupList withGroups(ImGroupsImGroupListGroups[] groups) {
        this.groups = groups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_records")
    public Long totalRecords;
    public ImGroupsImGroupList withTotalRecords(Long totalRecords) {
        this.totalRecords = totalRecords;
        return this;
    }
}