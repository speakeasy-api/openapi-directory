package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCommonAreaPhoneMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=display_name")
    public String displayName;
    public UpdateCommonAreaPhoneMultipartFormData withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=extension_number")
    public Long extensionNumber;
    public UpdateCommonAreaPhoneMultipartFormData withExtensionNumber(Long extensionNumber) {
        this.extensionNumber = extensionNumber;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=mac_address")
    public String macAddress;
    public UpdateCommonAreaPhoneMultipartFormData withMacAddress(String macAddress) {
        this.macAddress = macAddress;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=site_id")
    public String siteId;
    public UpdateCommonAreaPhoneMultipartFormData withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
}