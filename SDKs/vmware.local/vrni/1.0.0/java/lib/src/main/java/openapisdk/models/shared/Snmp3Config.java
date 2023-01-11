package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Snmp3Config {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authentication_password")
    public String authenticationPassword;
    public Snmp3Config withAuthenticationPassword(String authenticationPassword) {
        this.authenticationPassword = authenticationPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authentication_type")
    public Snmp3ConfigAuthenticationTypeEnum authenticationType;
    public Snmp3Config withAuthenticationType(Snmp3ConfigAuthenticationTypeEnum authenticationType) {
        this.authenticationType = authenticationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("context_name")
    public String contextName;
    public Snmp3Config withContextName(String contextName) {
        this.contextName = contextName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privacy_password")
    public String privacyPassword;
    public Snmp3Config withPrivacyPassword(String privacyPassword) {
        this.privacyPassword = privacyPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privacy_type")
    public Snmp3ConfigPrivacyTypeEnum privacyType;
    public Snmp3Config withPrivacyType(Snmp3ConfigPrivacyTypeEnum privacyType) {
        this.privacyType = privacyType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public Snmp3Config withUsername(String username) {
        this.username = username;
        return this;
    }
}