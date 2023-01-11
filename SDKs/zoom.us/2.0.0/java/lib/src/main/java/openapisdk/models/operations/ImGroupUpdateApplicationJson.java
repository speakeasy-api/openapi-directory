package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImGroupUpdateApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ImGroupUpdateApplicationJson withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("search_by_account")
    public Boolean searchByAccount;
    public ImGroupUpdateApplicationJson withSearchByAccount(Boolean searchByAccount) {
        this.searchByAccount = searchByAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("search_by_domain")
    public Boolean searchByDomain;
    public ImGroupUpdateApplicationJson withSearchByDomain(Boolean searchByDomain) {
        this.searchByDomain = searchByDomain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("search_by_ma_account")
    public Boolean searchByMaAccount;
    public ImGroupUpdateApplicationJson withSearchByMaAccount(Boolean searchByMaAccount) {
        this.searchByMaAccount = searchByMaAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ImGroupUpdateApplicationJsonTypeEnum type;
    public ImGroupUpdateApplicationJson withType(ImGroupUpdateApplicationJsonTypeEnum type) {
        this.type = type;
        return this;
    }
}