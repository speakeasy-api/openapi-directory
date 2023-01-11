package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGenerateBillingDocumentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PostGenerateBillingDocumentsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}