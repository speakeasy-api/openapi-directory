package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImGroup200ApplicationJson
 * Group object.
**/
public class ImGroup200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ImGroup200ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ImGroup200ApplicationJson withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("search_by_account")
    public Boolean searchByAccount;
    public ImGroup200ApplicationJson withSearchByAccount(Boolean searchByAccount) {
        this.searchByAccount = searchByAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("search_by_domain")
    public Boolean searchByDomain;
    public ImGroup200ApplicationJson withSearchByDomain(Boolean searchByDomain) {
        this.searchByDomain = searchByDomain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("search_by_ma_account")
    public Boolean searchByMaAccount;
    public ImGroup200ApplicationJson withSearchByMaAccount(Boolean searchByMaAccount) {
        this.searchByMaAccount = searchByMaAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_members")
    public Long totalMembers;
    public ImGroup200ApplicationJson withTotalMembers(Long totalMembers) {
        this.totalMembers = totalMembers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ImGroup200ApplicationJsonTypeEnum type;
    public ImGroup200ApplicationJson withType(ImGroup200ApplicationJsonTypeEnum type) {
        this.type = type;
        return this;
    }
}