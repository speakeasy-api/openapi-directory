import { SpeakeasyBase } from "../../../internal/utils";
import { LanguageCombinationDto } from "./languagecombinationdto";
export declare class FileCategorizationDto extends SpeakeasyBase {
    category?: string;
    fileId?: string;
    languageCombinationIds?: LanguageCombinationDto[];
    languageIds?: number[];
}
