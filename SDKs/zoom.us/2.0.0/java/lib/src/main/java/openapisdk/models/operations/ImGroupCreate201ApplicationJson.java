package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImGroupCreate201ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ImGroupCreate201ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ImGroupCreate201ApplicationJson withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("search_by_account")
    public Boolean searchByAccount;
    public ImGroupCreate201ApplicationJson withSearchByAccount(Boolean searchByAccount) {
        this.searchByAccount = searchByAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("search_by_domain")
    public Boolean searchByDomain;
    public ImGroupCreate201ApplicationJson withSearchByDomain(Boolean searchByDomain) {
        this.searchByDomain = searchByDomain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("search_by_ma_account")
    public Boolean searchByMaAccount;
    public ImGroupCreate201ApplicationJson withSearchByMaAccount(Boolean searchByMaAccount) {
        this.searchByMaAccount = searchByMaAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_members")
    public Long totalMembers;
    public ImGroupCreate201ApplicationJson withTotalMembers(Long totalMembers) {
        this.totalMembers = totalMembers;
        return this;
    }
}