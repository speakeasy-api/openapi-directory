package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountUcis {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("health")
    public AccountUcisHealth health;
    public AccountUcis withHealth(AccountUcisHealth health) {
        this.health = health;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public AccountUcis withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public AccountUcis withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ucpAccountId")
    public String ucpAccountId;
    public AccountUcis withUcpAccountId(String ucpAccountId) {
        this.ucpAccountId = ucpAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ucpLabel")
    public String ucpLabel;
    public AccountUcis withUcpLabel(String ucpLabel) {
        this.ucpLabel = ucpLabel;
        return this;
    }
}