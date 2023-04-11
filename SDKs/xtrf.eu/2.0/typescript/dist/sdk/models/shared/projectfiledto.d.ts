import { SpeakeasyBase } from "../../../internal/utils";
import { LanguageRelationDto } from "./languagerelationdto";
import { ProjectFileAddedByDto } from "./projectfileaddedbydto";
import { RemoteCATToolReferencesDto } from "./remotecattoolreferencesdto";
/**
 * Success
 */
export declare class ProjectFileDto extends SpeakeasyBase {
    addedBy?: ProjectFileAddedByDto;
    addedInJob?: string;
    addedInLastStep?: boolean;
    addedInStep?: number;
    categoryKey?: string;
    id?: string;
    isAccepted?: boolean;
    isLink?: boolean;
    isRemote?: boolean;
    languageRelation?: LanguageRelationDto;
    lastModifiedOn?: number;
    name?: string;
    remoteCATToolReferences?: RemoteCATToolReferencesDto;
    sharedWithJobs?: string[];
    size?: number;
    url?: string;
}
