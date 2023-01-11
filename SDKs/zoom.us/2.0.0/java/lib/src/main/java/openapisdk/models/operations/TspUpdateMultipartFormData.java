package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TspUpdateMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=dial_in_number_unrestricted")
    public Boolean dialInNumberUnrestricted;
    public TspUpdateMultipartFormData withDialInNumberUnrestricted(Boolean dialInNumberUnrestricted) {
        this.dialInNumberUnrestricted = dialInNumberUnrestricted;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=enable")
    public Boolean enable;
    public TspUpdateMultipartFormData withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=master_account_setting_extended")
    public Boolean masterAccountSettingExtended;
    public TspUpdateMultipartFormData withMasterAccountSettingExtended(Boolean masterAccountSettingExtended) {
        this.masterAccountSettingExtended = masterAccountSettingExtended;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=modify_credential_forbidden")
    public Boolean modifyCredentialForbidden;
    public TspUpdateMultipartFormData withModifyCredentialForbidden(Boolean modifyCredentialForbidden) {
        this.modifyCredentialForbidden = modifyCredentialForbidden;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=tsp_bridge")
    public TspUpdateMultipartFormDataTspBridgeEnum tspBridge;
    public TspUpdateMultipartFormData withTspBridge(TspUpdateMultipartFormDataTspBridgeEnum tspBridge) {
        this.tspBridge = tspBridge;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=tsp_enabled")
    public Boolean tspEnabled;
    public TspUpdateMultipartFormData withTspEnabled(Boolean tspEnabled) {
        this.tspEnabled = tspEnabled;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=tsp_provider")
    public String tspProvider;
    public TspUpdateMultipartFormData withTspProvider(String tspProvider) {
        this.tspProvider = tspProvider;
        return this;
    }
}