package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnassignAPhoneNumAutoReceptionistPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=autoReceptionistId")
    public String autoReceptionistId;
    public UnassignAPhoneNumAutoReceptionistPathParams withAutoReceptionistId(String autoReceptionistId) {
        this.autoReceptionistId = autoReceptionistId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=phoneNumberId")
    public String phoneNumberId;
    public UnassignAPhoneNumAutoReceptionistPathParams withPhoneNumberId(String phoneNumberId) {
        this.phoneNumberId = phoneNumberId;
        return this;
    }
}