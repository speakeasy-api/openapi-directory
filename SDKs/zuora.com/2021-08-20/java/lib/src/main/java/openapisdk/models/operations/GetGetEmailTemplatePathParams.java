package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetEmailTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetGetEmailTemplatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}