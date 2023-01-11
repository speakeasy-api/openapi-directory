package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTextPronunciationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=word")
    public String word;
    public GetTextPronunciationsPathParams withWord(String word) {
        this.word = word;
        return this;
    }
}