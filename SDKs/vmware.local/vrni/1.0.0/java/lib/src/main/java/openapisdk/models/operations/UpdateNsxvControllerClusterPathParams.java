package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNsxvControllerClusterPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public UpdateNsxvControllerClusterPathParams withId(String id) {
        this.id = id;
        return this;
    }
}