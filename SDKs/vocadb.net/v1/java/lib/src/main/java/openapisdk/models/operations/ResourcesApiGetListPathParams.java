package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResourcesApiGetListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cultureCode")
    public String cultureCode;
    public ResourcesApiGetListPathParams withCultureCode(String cultureCode) {
        this.cultureCode = cultureCode;
        return this;
    }
}