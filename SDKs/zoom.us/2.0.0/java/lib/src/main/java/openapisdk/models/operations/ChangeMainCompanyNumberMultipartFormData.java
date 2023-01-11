package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChangeMainCompanyNumberMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=phone_number")
    public String phoneNumber;
    public ChangeMainCompanyNumberMultipartFormData withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
}