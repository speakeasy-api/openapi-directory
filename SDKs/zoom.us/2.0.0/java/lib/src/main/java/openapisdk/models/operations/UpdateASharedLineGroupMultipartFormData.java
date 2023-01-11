package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateASharedLineGroupMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=display_name")
    public String displayName;
    public UpdateASharedLineGroupMultipartFormData withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=extension_number")
    public Long extensionNumber;
    public UpdateASharedLineGroupMultipartFormData withExtensionNumber(Long extensionNumber) {
        this.extensionNumber = extensionNumber;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=primary_number,json")
    public UpdateASharedLineGroupMultipartFormDataPrimaryNumber primaryNumber;
    public UpdateASharedLineGroupMultipartFormData withPrimaryNumber(UpdateASharedLineGroupMultipartFormDataPrimaryNumber primaryNumber) {
        this.primaryNumber = primaryNumber;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=status")
    public UpdateASharedLineGroupMultipartFormDataStatusEnum status;
    public UpdateASharedLineGroupMultipartFormData withStatus(UpdateASharedLineGroupMultipartFormDataStatusEnum status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=timezone")
    public String timezone;
    public UpdateASharedLineGroupMultipartFormData withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
}