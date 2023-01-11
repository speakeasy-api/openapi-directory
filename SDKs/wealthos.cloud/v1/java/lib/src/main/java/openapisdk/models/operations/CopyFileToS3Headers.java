package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CopyFileToS3Headers {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-api-key")
    public String xApiKey;
    public CopyFileToS3Headers withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}