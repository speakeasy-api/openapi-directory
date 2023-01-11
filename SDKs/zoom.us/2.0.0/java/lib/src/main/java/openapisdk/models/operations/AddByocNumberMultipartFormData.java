package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddByocNumberMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=carrier")
    public String carrier;
    public AddByocNumberMultipartFormData withCarrier(String carrier) {
        this.carrier = carrier;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=phone_numbers,json")
    public String[] phoneNumbers;
    public AddByocNumberMultipartFormData withPhoneNumbers(String[] phoneNumbers) {
        this.phoneNumbers = phoneNumbers;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=site_id")
    public String siteId;
    public AddByocNumberMultipartFormData withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
}