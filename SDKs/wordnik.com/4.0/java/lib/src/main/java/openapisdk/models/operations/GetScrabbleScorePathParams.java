package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetScrabbleScorePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=word")
    public String word;
    public GetScrabbleScorePathParams withWord(String word) {
        this.word = word;
        return this;
    }
}