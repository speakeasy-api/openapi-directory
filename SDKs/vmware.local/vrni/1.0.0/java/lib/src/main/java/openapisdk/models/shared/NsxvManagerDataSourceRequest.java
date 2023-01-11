package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NsxvManagerDataSourceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("central_cli_enabled")
    public Boolean centralCliEnabled;
    public NsxvManagerDataSourceRequest withCentralCliEnabled(Boolean centralCliEnabled) {
        this.centralCliEnabled = centralCliEnabled;
        return this;
    }
    @JsonProperty("credentials")
    public PasswordCredentials credentials;
    public NsxvManagerDataSourceRequest withCredentials(PasswordCredentials credentials) {
        this.credentials = credentials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public NsxvManagerDataSourceRequest withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fqdn")
    public String fqdn;
    public NsxvManagerDataSourceRequest withFqdn(String fqdn) {
        this.fqdn = fqdn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip")
    public String ip;
    public NsxvManagerDataSourceRequest withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipfix_enabled")
    public Boolean ipfixEnabled;
    public NsxvManagerDataSourceRequest withIpfixEnabled(Boolean ipfixEnabled) {
        this.ipfixEnabled = ipfixEnabled;
        return this;
    }
    @JsonProperty("nickname")
    public String nickname;
    public NsxvManagerDataSourceRequest withNickname(String nickname) {
        this.nickname = nickname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public NsxvManagerDataSourceRequest withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonProperty("proxy_id")
    public String proxyId;
    public NsxvManagerDataSourceRequest withProxyId(String proxyId) {
        this.proxyId = proxyId;
        return this;
    }
    @JsonProperty("vcenter_id")
    public String vcenterId;
    public NsxvManagerDataSourceRequest withVcenterId(String vcenterId) {
        this.vcenterId = vcenterId;
        return this;
    }
}