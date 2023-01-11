package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecordingDeleteOneQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=action")
    public RecordingDeleteOneActionEnum action;
    public RecordingDeleteOneQueryParams withAction(RecordingDeleteOneActionEnum action) {
        this.action = action;
        return this;
    }
}