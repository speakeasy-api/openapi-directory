package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TspUpdateApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dial_in_number_unrestricted")
    public Boolean dialInNumberUnrestricted;
    public TspUpdateApplicationJson withDialInNumberUnrestricted(Boolean dialInNumberUnrestricted) {
        this.dialInNumberUnrestricted = dialInNumberUnrestricted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public TspUpdateApplicationJson withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("master_account_setting_extended")
    public Boolean masterAccountSettingExtended;
    public TspUpdateApplicationJson withMasterAccountSettingExtended(Boolean masterAccountSettingExtended) {
        this.masterAccountSettingExtended = masterAccountSettingExtended;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modify_credential_forbidden")
    public Boolean modifyCredentialForbidden;
    public TspUpdateApplicationJson withModifyCredentialForbidden(Boolean modifyCredentialForbidden) {
        this.modifyCredentialForbidden = modifyCredentialForbidden;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tsp_bridge")
    public TspUpdateApplicationJsonTspBridgeEnum tspBridge;
    public TspUpdateApplicationJson withTspBridge(TspUpdateApplicationJsonTspBridgeEnum tspBridge) {
        this.tspBridge = tspBridge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tsp_enabled")
    public Boolean tspEnabled;
    public TspUpdateApplicationJson withTspEnabled(Boolean tspEnabled) {
        this.tspEnabled = tspEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tsp_provider")
    public String tspProvider;
    public TspUpdateApplicationJson withTspProvider(String tspProvider) {
        this.tspProvider = tspProvider;
        return this;
    }
}