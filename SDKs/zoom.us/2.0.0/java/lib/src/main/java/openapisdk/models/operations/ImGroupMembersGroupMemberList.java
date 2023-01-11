package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImGroupMembersGroupMemberList
 * Pagination Object.
**/
public class ImGroupMembersGroupMemberList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("members")
    public ImGroupMembersGroupMemberListMembers[] members;
    public ImGroupMembersGroupMemberList withMembers(ImGroupMembersGroupMemberListMembers[] members) {
        this.members = members;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_token")
    public String nextPageToken;
    public ImGroupMembersGroupMemberList withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_count")
    public Long pageCount;
    public ImGroupMembersGroupMemberList withPageCount(Long pageCount) {
        this.pageCount = pageCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_number")
    public Long pageNumber;
    public ImGroupMembersGroupMemberList withPageNumber(Long pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public ImGroupMembersGroupMemberList withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_records")
    public Long totalRecords;
    public ImGroupMembersGroupMemberList withTotalRecords(Long totalRecords) {
        this.totalRecords = totalRecords;
        return this;
    }
}