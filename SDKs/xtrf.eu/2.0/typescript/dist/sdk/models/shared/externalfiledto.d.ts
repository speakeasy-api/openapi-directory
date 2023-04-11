import { SpeakeasyBase } from "../../../internal/utils";
import { LanguageCombinationDto } from "./languagecombinationdto";
/**
 * Added file links to the project as added by PM.
 */
export declare class ExternalFileDto extends SpeakeasyBase {
    category?: string;
    externalInfo?: Record<string, string>;
    filename?: string;
    languageCombinationIds?: LanguageCombinationDto[];
    languageIds?: number[];
}
