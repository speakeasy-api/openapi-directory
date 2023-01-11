package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RoleMembersRoleMembersList
 * List of a Role Members
**/
public class RoleMembersRoleMembersList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("members")
    public RoleMembersRoleMembersListMembers[] members;
    public RoleMembersRoleMembersList withMembers(RoleMembersRoleMembersListMembers[] members) {
        this.members = members;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_token")
    public String nextPageToken;
    public RoleMembersRoleMembersList withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_count")
    public Long pageCount;
    public RoleMembersRoleMembersList withPageCount(Long pageCount) {
        this.pageCount = pageCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_number")
    public Long pageNumber;
    public RoleMembersRoleMembersList withPageNumber(Long pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public RoleMembersRoleMembersList withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_records")
    public Long totalRecords;
    public RoleMembersRoleMembersList withTotalRecords(Long totalRecords) {
        this.totalRecords = totalRecords;
        return this;
    }
}