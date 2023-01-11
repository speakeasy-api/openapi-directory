package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImGroupsImGroupListGroups
 * Group object.
**/
public class ImGroupsImGroupListGroups {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ImGroupsImGroupListGroups withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ImGroupsImGroupListGroups withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("search_by_account")
    public Boolean searchByAccount;
    public ImGroupsImGroupListGroups withSearchByAccount(Boolean searchByAccount) {
        this.searchByAccount = searchByAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("search_by_domain")
    public Boolean searchByDomain;
    public ImGroupsImGroupListGroups withSearchByDomain(Boolean searchByDomain) {
        this.searchByDomain = searchByDomain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("search_by_ma_account")
    public Boolean searchByMaAccount;
    public ImGroupsImGroupListGroups withSearchByMaAccount(Boolean searchByMaAccount) {
        this.searchByMaAccount = searchByMaAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_members")
    public Long totalMembers;
    public ImGroupsImGroupListGroups withTotalMembers(Long totalMembers) {
        this.totalMembers = totalMembers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ImGroupsImGroupListGroupsTypeEnum type;
    public ImGroupsImGroupListGroups withType(ImGroupsImGroupListGroupsTypeEnum type) {
        this.type = type;
        return this;
    }
}