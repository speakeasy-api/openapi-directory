import { SpeakeasyBase } from "../../../internal/utils";
import { LanguageCombinationDto1 } from "./languagecombinationdto1";
export declare class ProjectLanguagesDTO extends SpeakeasyBase {
    languageCombinations?: LanguageCombinationDto1[];
    sourceLanguageId?: number;
    specializationId?: number;
    targetLanguageIds?: number[];
}
