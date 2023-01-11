package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImGroupCreateApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ImGroupCreateApplicationJson withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("search_by_account")
    public Boolean searchByAccount;
    public ImGroupCreateApplicationJson withSearchByAccount(Boolean searchByAccount) {
        this.searchByAccount = searchByAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("search_by_domain")
    public Boolean searchByDomain;
    public ImGroupCreateApplicationJson withSearchByDomain(Boolean searchByDomain) {
        this.searchByDomain = searchByDomain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("search_by_ma_account")
    public Boolean searchByMaAccount;
    public ImGroupCreateApplicationJson withSearchByMaAccount(Boolean searchByMaAccount) {
        this.searchByMaAccount = searchByMaAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ImGroupCreateApplicationJsonTypeEnum type;
    public ImGroupCreateApplicationJson withType(ImGroupCreateApplicationJsonTypeEnum type) {
        this.type = type;
        return this;
    }
}