import { AxiosInstance } from "axios";
import { AllFunctions } from "./allfunctions";
import { CurationTags } from "./curationtags";
import { Download } from "./download";
import { History } from "./history";
import { OntologyTags } from "./ontologytags";
import { OrganismList } from "./organismlist";
import { PathwayInformation } from "./pathwayinformation";
import { PathwayList } from "./pathwaylist";
import { Search } from "./search";
import { UserManagement } from "./usermanagement";
import { WriteCreateUpdateDelete } from "./writecreateupdatedelete";
export declare const ServerList: readonly ["https://webservice.wikipathways.org"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    allFunctions: AllFunctions;
    curationTags: CurationTags;
    download: Download;
    history: History;
    ontologyTags: OntologyTags;
    organismList: OrganismList;
    pathwayInformation: PathwayInformation;
    pathwayList: PathwayList;
    search: Search;
    userManagement: UserManagement;
    writeCreateUpdateDelete: WriteCreateUpdateDelete;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
