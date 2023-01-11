package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CiscoSwitchDataSourceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("credentials")
    public PasswordCredentials credentials;
    public CiscoSwitchDataSourceRequest withCredentials(PasswordCredentials credentials) {
        this.credentials = credentials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public CiscoSwitchDataSourceRequest withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fqdn")
    public String fqdn;
    public CiscoSwitchDataSourceRequest withFqdn(String fqdn) {
        this.fqdn = fqdn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip")
    public String ip;
    public CiscoSwitchDataSourceRequest withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @JsonProperty("nickname")
    public String nickname;
    public CiscoSwitchDataSourceRequest withNickname(String nickname) {
        this.nickname = nickname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public CiscoSwitchDataSourceRequest withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonProperty("proxy_id")
    public String proxyId;
    public CiscoSwitchDataSourceRequest withProxyId(String proxyId) {
        this.proxyId = proxyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("switch_type")
    public CiscoSwitchTypeEnum switchType;
    public CiscoSwitchDataSourceRequest withSwitchType(CiscoSwitchTypeEnum switchType) {
        this.switchType = switchType;
        return this;
    }
}