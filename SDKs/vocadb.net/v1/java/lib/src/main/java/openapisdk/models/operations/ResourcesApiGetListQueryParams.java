package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResourcesApiGetListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=setNames")
    public String[] setNames;
    public ResourcesApiGetListQueryParams withSetNames(String[] setNames) {
        this.setNames = setNames;
        return this;
    }
}