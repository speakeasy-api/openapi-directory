package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetComicIdInfo0JsonPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=comicId")
    public Double comicId;
    public GetComicIdInfo0JsonPathParams withComicId(Double comicId) {
        this.comicId = comicId;
        return this;
    }
}