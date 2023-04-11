import { SpeakeasyBase } from "../../../internal/utils";
import { LanguageCombinationDto } from "./languagecombinationdto";
export declare class FileLinkCategorizationDto extends SpeakeasyBase {
    category?: string;
    externalInfo?: Record<string, string>;
    filename?: string;
    languageCombinationIds?: LanguageCombinationDto[];
    languageIds?: number[];
    toBeGenerated?: boolean;
    url?: string;
}
