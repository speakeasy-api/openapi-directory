package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NsxvManagerDataSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("central_cli_enabled")
    public Boolean centralCliEnabled;
    public NsxvManagerDataSource withCentralCliEnabled(Boolean centralCliEnabled) {
        this.centralCliEnabled = centralCliEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("credentials")
    public PasswordCredentials credentials;
    public NsxvManagerDataSource withCredentials(PasswordCredentials credentials) {
        this.credentials = credentials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public NsxvManagerDataSource withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity_id")
    public String entityId;
    public NsxvManagerDataSource withEntityId(String entityId) {
        this.entityId = entityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity_type")
    public DataSourceTypeEnum entityType;
    public NsxvManagerDataSource withEntityType(DataSourceTypeEnum entityType) {
        this.entityType = entityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fqdn")
    public String fqdn;
    public NsxvManagerDataSource withFqdn(String fqdn) {
        this.fqdn = fqdn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip")
    public String ip;
    public NsxvManagerDataSource withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipfix_enabled")
    public Boolean ipfixEnabled;
    public NsxvManagerDataSource withIpfixEnabled(Boolean ipfixEnabled) {
        this.ipfixEnabled = ipfixEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nickname")
    public String nickname;
    public NsxvManagerDataSource withNickname(String nickname) {
        this.nickname = nickname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public NsxvManagerDataSource withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proxy_id")
    public String proxyId;
    public NsxvManagerDataSource withProxyId(String proxyId) {
        this.proxyId = proxyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vcenter_id")
    public String vcenterId;
    public NsxvManagerDataSource withVcenterId(String vcenterId) {
        this.vcenterId = vcenterId;
        return this;
    }
}