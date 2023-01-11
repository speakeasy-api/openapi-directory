package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTopExamplePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=word")
    public String word;
    public GetTopExamplePathParams withWord(String word) {
        this.word = word;
        return this;
    }
}