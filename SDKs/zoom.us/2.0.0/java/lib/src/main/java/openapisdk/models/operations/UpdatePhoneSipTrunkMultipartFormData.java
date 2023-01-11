package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePhoneSipTrunkMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=carrier_account")
    public String carrierAccount;
    public UpdatePhoneSipTrunkMultipartFormData withCarrierAccount(String carrierAccount) {
        this.carrierAccount = carrierAccount;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public UpdatePhoneSipTrunkMultipartFormData withName(String name) {
        this.name = name;
        return this;
    }
}