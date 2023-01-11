package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SwitchDataSourceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("credentials")
    public PasswordCredentials credentials;
    public SwitchDataSourceRequest withCredentials(PasswordCredentials credentials) {
        this.credentials = credentials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public SwitchDataSourceRequest withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fqdn")
    public String fqdn;
    public SwitchDataSourceRequest withFqdn(String fqdn) {
        this.fqdn = fqdn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip")
    public String ip;
    public SwitchDataSourceRequest withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @JsonProperty("nickname")
    public String nickname;
    public SwitchDataSourceRequest withNickname(String nickname) {
        this.nickname = nickname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public SwitchDataSourceRequest withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonProperty("proxy_id")
    public String proxyId;
    public SwitchDataSourceRequest withProxyId(String proxyId) {
        this.proxyId = proxyId;
        return this;
    }
}