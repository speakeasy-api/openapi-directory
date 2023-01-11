package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAPhoneNumberSlgPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=phoneNumberId")
    public String phoneNumberId;
    public DeleteAPhoneNumberSlgPathParams withPhoneNumberId(String phoneNumberId) {
        this.phoneNumberId = phoneNumberId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sharedLineGroupId")
    public String sharedLineGroupId;
    public DeleteAPhoneNumberSlgPathParams withSharedLineGroupId(String sharedLineGroupId) {
        this.sharedLineGroupId = sharedLineGroupId;
        return this;
    }
}