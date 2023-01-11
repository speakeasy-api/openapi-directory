package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TrackingfieldUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fieldId")
    public String fieldId;
    public TrackingfieldUpdatePathParams withFieldId(String fieldId) {
        this.fieldId = fieldId;
        return this;
    }
}