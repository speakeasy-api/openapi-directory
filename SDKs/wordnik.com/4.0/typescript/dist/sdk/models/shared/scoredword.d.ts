import { SpeakeasyBase } from "../../../internal/utils";
export declare class ScoredWord extends SpeakeasyBase {
    baseWordScore?: number;
    docTermCount?: number;
    id?: number;
    lemma?: string;
    partOfSpeech?: string;
    position?: number;
    score?: number;
    sentenceId?: number;
    stopword?: boolean;
    word?: string;
    wordType?: string;
}
