package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Tsp200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dial_in_number_unrestricted")
    public Boolean dialInNumberUnrestricted;
    public Tsp200ApplicationJson withDialInNumberUnrestricted(Boolean dialInNumberUnrestricted) {
        this.dialInNumberUnrestricted = dialInNumberUnrestricted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dial_in_numbers")
    public Tsp200ApplicationJsonDialInNumbers[] dialInNumbers;
    public Tsp200ApplicationJson withDialInNumbers(Tsp200ApplicationJsonDialInNumbers[] dialInNumbers) {
        this.dialInNumbers = dialInNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public Tsp200ApplicationJson withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("master_account_setting_extended")
    public Boolean masterAccountSettingExtended;
    public Tsp200ApplicationJson withMasterAccountSettingExtended(Boolean masterAccountSettingExtended) {
        this.masterAccountSettingExtended = masterAccountSettingExtended;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modify_credential_forbidden")
    public Boolean modifyCredentialForbidden;
    public Tsp200ApplicationJson withModifyCredentialForbidden(Boolean modifyCredentialForbidden) {
        this.modifyCredentialForbidden = modifyCredentialForbidden;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tsp_bridge")
    public Tsp200ApplicationJsonTspBridgeEnum tspBridge;
    public Tsp200ApplicationJson withTspBridge(Tsp200ApplicationJsonTspBridgeEnum tspBridge) {
        this.tspBridge = tspBridge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tsp_enabled")
    public Boolean tspEnabled;
    public Tsp200ApplicationJson withTspEnabled(Boolean tspEnabled) {
        this.tspEnabled = tspEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tsp_provider")
    public String tspProvider;
    public Tsp200ApplicationJson withTspProvider(String tspProvider) {
        this.tspProvider = tspProvider;
        return this;
    }
}