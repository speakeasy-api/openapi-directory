package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TrackingfieldGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fieldId")
    public String fieldId;
    public TrackingfieldGetPathParams withFieldId(String fieldId) {
        this.fieldId = fieldId;
        return this;
    }
}