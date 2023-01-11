package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SwitchDataSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("credentials")
    public PasswordCredentials credentials;
    public SwitchDataSource withCredentials(PasswordCredentials credentials) {
        this.credentials = credentials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public SwitchDataSource withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity_id")
    public String entityId;
    public SwitchDataSource withEntityId(String entityId) {
        this.entityId = entityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity_type")
    public DataSourceTypeEnum entityType;
    public SwitchDataSource withEntityType(DataSourceTypeEnum entityType) {
        this.entityType = entityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fqdn")
    public String fqdn;
    public SwitchDataSource withFqdn(String fqdn) {
        this.fqdn = fqdn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip")
    public String ip;
    public SwitchDataSource withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nickname")
    public String nickname;
    public SwitchDataSource withNickname(String nickname) {
        this.nickname = nickname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public SwitchDataSource withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proxy_id")
    public String proxyId;
    public SwitchDataSource withProxyId(String proxyId) {
        this.proxyId = proxyId;
        return this;
    }
}