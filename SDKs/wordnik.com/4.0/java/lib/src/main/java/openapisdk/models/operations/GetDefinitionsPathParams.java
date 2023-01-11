package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDefinitionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=word")
    public String word;
    public GetDefinitionsPathParams withWord(String word) {
        this.word = word;
        return this;
    }
}