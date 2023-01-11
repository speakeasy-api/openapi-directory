package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListApplicationTiersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ListApplicationTiersPathParams withId(String id) {
        this.id = id;
        return this;
    }
}