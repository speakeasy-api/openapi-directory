package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePhoneSiteMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=auto_receptionist_name")
    public String autoReceptionistName;
    public CreatePhoneSiteMultipartFormData withAutoReceptionistName(String autoReceptionistName) {
        this.autoReceptionistName = autoReceptionistName;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=default_emergency_address,json")
    public CreatePhoneSiteMultipartFormDataDefaultEmergencyAddress defaultEmergencyAddress;
    public CreatePhoneSiteMultipartFormData withDefaultEmergencyAddress(CreatePhoneSiteMultipartFormDataDefaultEmergencyAddress defaultEmergencyAddress) {
        this.defaultEmergencyAddress = defaultEmergencyAddress;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public CreatePhoneSiteMultipartFormData withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=short_extension,json")
    public CreatePhoneSiteMultipartFormDataShortExtension shortExtension;
    public CreatePhoneSiteMultipartFormData withShortExtension(CreatePhoneSiteMultipartFormDataShortExtension shortExtension) {
        this.shortExtension = shortExtension;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=site_code")
    public Long siteCode;
    public CreatePhoneSiteMultipartFormData withSiteCode(Long siteCode) {
        this.siteCode = siteCode;
        return this;
    }
}